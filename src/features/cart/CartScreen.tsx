/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getAllOrders, postOrder } from "../../api/OrderApi";
import type { OrderRequest } from "../../api/data/OrderRequest";
import type { OrderItem } from "../../api/data/OrderItem";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { NavPath } from "../../constant/NavPath";
import { Business } from "../../constant/Business";

export default function CartScreen() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { cartItems, setCartItems } = useCart();
    const [loading, setLoading] = useState(false);
    const [orderedItems, setOrderedItems] = useState<OrderItem[]>([]);
    const hasLoaded = useRef(false);

    useEffect(() => {
        if (hasLoaded.current) return;
        hasLoaded.current = true;

        Promise.all([getAllOrders()])
            .then(([orders]) => {
                console.log("Retrieved all orders: ", orders);
                const allOrderedItems = orders.flatMap(order => order.items);
                setOrderedItems(allOrderedItems);
            })
            .catch(err => console.error("Failed to retrieve all orders: ", err));
    }, []);

    const subTotal = useMemo(() => {
        console.log("Updating cart subtotal.")
        const allItems = [...cartItems, ...orderedItems];
        return allItems.reduce((sum, item) => sum + item.subTotal, 0).toFixed(2);
    }, [cartItems, orderedItems]);

    const tax = useMemo(() => {
        console.log("Updating cart tax.")
        const allItems = [...cartItems, ...orderedItems];
        return allItems.reduce((sum, item) => sum + item.tax, 0).toFixed(2);
    }, [cartItems, orderedItems]);

    const total = useMemo(() => {
        console.log("Updating cart total.")
        const allItems = [...cartItems, ...orderedItems];
        return allItems.reduce((sum, item) => sum + item.total, 0).toFixed(2);
    }, [cartItems, orderedItems]);

    const removeItem = (index: number) => {
        console.log("Removing index [" + index + "] from cart.")
        setCartItems(prev => prev.filter((_, i) => i !== index));
        toast.success(t("cart.itemRemovedMessage"));
    };

    const placeAnOrder = async () => {
        console.log("Place an order button clicked.");
        if (cartItems.length == 0) {
            toast.info(t("cart.emptyCart"));
            return;
        }
        setLoading(true);
        const orderRequest: OrderRequest = { items: cartItems }
        try {
            const result = await postOrder(orderRequest);
            console.log("Recieved place an order response: ", result);
            setCartItems([]);       // Clear cart
            navigate(NavPath.CONFIRMATION);
        } catch (error) {
            console.error("Failed to place an order: ", error);
            setLoading(false);
        }
    }

    return (
        <div id="container">
            <Header />
            <div className="body">
                <div className="content">
                    <h1 className="pageTitle">Cart & Order Summary</h1>
                    {/* Cart Table */}
                    <table id="cartTable" className="table">
                        <thead className="tableHead">
                            <tr>
                                <th className="numberColumn">#</th>
                                <th className="nameColumn">Name</th>
                                <th className="priceColumn">Price</th>
                                <th className="removeTableData">
                                    <button className="removeBtn" style={{ visibility: "hidden" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24">
                                            <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="numberColumn">{index + 1}</td>
                                        <td className="nameColumn">{item.menuItemName}</td>
                                        <td className="priceColumn">{Business.CURRENCY}{item.subTotal}</td>
                                        <td className="removeTableData">
                                            <button className="removeBtn" onClick={() => removeItem(index)}>
                                                <svg width="20" height="20" viewBox="0 0 24 24">
                                                    <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    {/* Ordered Table */}
                    <table id="orderedTable" className="table" style={{ marginTop: "15px" }}>
                        <tbody>
                            {orderedItems.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="numberColumn">{index + 1}</td>
                                        <td className="nameColumn">{item.menuItemName}</td>
                                        <td className="priceColumn">{Business.CURRENCY}{item.subTotal}</td>
                                        <td className="removeTableData">
                                            <button className="removeBtn" style={{ visibility: "hidden" }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24">
                                                    <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    {/* Price Table */}
                    <table id="priceTable" className="table" style={{ marginTop: "15px" }}>
                        <tbody>
                            <tr>
                                <td className="key">{t("cart.subtotal")}</td>
                                <td className="value">{Business.CURRENCY}{subTotal}</td>
                            </tr>
                            <tr>
                                <td className="key">{t("cart.tax")} ({Business.TAX_PERCENTAGE}% HST)</td>
                                <td className="value">{Business.CURRENCY}{tax}</td>
                            </tr>
                            <tr>
                                <td className="key">{t("cart.total")}</td>
                                <td className="value">{Business.CURRENCY}{total}</td>
                            </tr>
                        </tbody>
                    </table>
                    {loading && (
                        <div className="roundedContainer" style={{ marginTop: "25px" }}>
                            <ClipLoader size={28} color="white" />
                        </div>)
                    }
                    {!loading && (<button className="roundedButton" style={{ marginTop: "25px" }} onClick={placeAnOrder}>{t("cart.button")}</button>)}
                </div>
            </div>
        </div>
    );
}