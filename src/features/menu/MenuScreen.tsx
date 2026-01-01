/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import { useEffect, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import Header from "../../components/Header";
import type { Category } from "../../api/data/Category";
import type { MenuItem } from "../../api/data/MenuItem";
import MenuItemIconButton from "../../components/MenuItemIconButton";
import infoIcon from "../../assets/info.png";
import cartIcon from "../../assets/cart.png";
import tagSpicyIcon from "../../assets/tag_spicy.png";
import tagVegetarianIcon from "../../assets/tag_vegetarian.png";
import tagHalalIcon from "../../assets/tag_halal.png";
import tagKosherIcon from "../../assets/tag_kosher.png";
import tagSeafoodIcon from "../../assets/tag_seafood.png";
import tagSugarFreeIcon from "../../assets/tag_sugar_free.png";
import tagLactoseFreeIcon from "../../assets/tag_lactose_free.png";
import tagGlutenFreeIcon from "../../assets/tag_gluten_free.png";
import tagPeanutFreeIcon from "../../assets/tag_peanut_free.png";
import { MenuItemTag } from "../../api/constant/MenuItemTag";
import MenuItemDetailDialog from "../../components/MenuItemDetailDialog";
import { useCart } from "../../context/CartContext";
import type { CartItem } from "../../types/CartItem";
import { useMenu } from "../../context/MenuContext";
import { getCategories } from "../../api/CategoryApi";
import { getMenuItems } from "../../api/MenuItemApi";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Business } from "../../constant/Business";

type MenuItemListProps = {
    category: Category;
    filteredMenuItems: MenuItem[];
    onMenuItemInfo: (category: Category, menuItem: MenuItem) => void;
    onAddItemToCart: (category: Category, menuItem: MenuItem) => void;
};

export default function MenuScreen() {
    const { t } = useTranslation();

    const parentRef = useRef<HTMLDivElement>(null);
    const { categories, menuItems, setCategories, setMenuItems } = useMenu();
    const { setCartItems } = useCart();
    const [isDialogOpened, setOpenMenuItemDetailDialog] = useState(false);
    const [category, setCategory] = useState<Category | null>(null);
    const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
    const [isDataFetchLoading, setDataFetchLoading] = useState(false);

    useEffect(() => {
        if (categories.length > 0 && menuItems.length > 0) return;

        setDataFetchLoading(true);
        Promise.all([getCategories(), getMenuItems()])
            .then(([categories, menuItems]) => {
                console.log("Retrieved categories: ", categories);
                console.log("Retrieved menu items: ", menuItems);
                setCategories(categories);
                setMenuItems(menuItems);
            })
            .catch(err => console.error("API error occured: ", err))
            .finally(() => setDataFetchLoading(false));
    }, []);

    const categoryVirtualizer = useVirtualizer({
        count: categories.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 40,
        overscan: 5,
    });

    const onMenuItemInfoClicked = (category: Category, menuItem: MenuItem) => {
        console.log("Open menu item detail: [" + menuItem.name + "]");
        setCategory(category);
        setMenuItem(menuItem);
        setOpenMenuItemDetailDialog(true);
    }

    const onAddMenuItemToCart = (category: Category, menuItem: MenuItem) => {
        console.log("Add to cart: [" + menuItem.name + "]");
        setCartItems(prev => [...prev, convertMenuItemToCartItem(category, menuItem)]);
        toast.success(t("menu.itemAddedMessage"));
    }

    return (
        <div id="container">
            <Header />
            <div className="body">
                <div className="fullWidthContent">
                    {isDataFetchLoading && (
                        <div className="loadingOverlay">
                            <ClipLoader size={100} color="black" />
                        </div>)
                    }
                    {!isDataFetchLoading && (
                        <>
                            <div className="listWidget"
                                ref={parentRef}>
                                <div className="listContainer">
                                    {categoryVirtualizer.getVirtualItems().map((categoryVirtualRow) => {
                                        const category = categories[categoryVirtualRow.index];
                                        const filteredMenuItems = menuItems.filter(item => item.categoryId === category.id);
                                        return (
                                            <div id="menuCategoryRow"
                                                key={categoryVirtualRow.key}>
                                                <h3 id="categoryName">{categories[categoryVirtualRow.index].name}</h3>
                                                <p id="categoryDescription">{categories[categoryVirtualRow.index].description}</p>

                                                {/* Menu Item Row */}
                                                <MenuItemList
                                                    category={categories[categoryVirtualRow.index]}
                                                    filteredMenuItems={filteredMenuItems}
                                                    onMenuItemInfo={onMenuItemInfoClicked}
                                                    onAddItemToCart={onAddMenuItemToCart} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <MenuItemDetailDialog isOpen={isDialogOpened} category={category!} menuItem={menuItem!} onAddItemToCart={onAddMenuItemToCart} onClose={() => setOpenMenuItemDetailDialog(false)} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

function MenuItemList({ category, filteredMenuItems, onMenuItemInfo, onAddItemToCart }: MenuItemListProps) {
    const parentRef = useRef(null);

    const filteredMenuItemVirtualizer = useVirtualizer({
        count: filteredMenuItems.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 300,
        horizontal: true
    });

    return (
        <div className="menuItemListWidget"
            ref={parentRef}>
            <div className="listContainer"
                style={{ width: filteredMenuItemVirtualizer.getTotalSize() }}>
                {filteredMenuItemVirtualizer.getVirtualItems().map((filteredMenuItemVirtualRow) => (
                    <div className="menuItemContainer"
                        key={filteredMenuItemVirtualRow.key}
                        style={{ transform: `translateX(${filteredMenuItemVirtualRow.start}px)`, width: filteredMenuItemVirtualRow.size }}>
                        <div className="menuItemCard">
                            <img className="menuItemImage" src={filteredMenuItems[filteredMenuItemVirtualRow.index].mainImage} />
                            <div className="menuItemIntro">
                                <h5 className="menuItemName">{filteredMenuItems[filteredMenuItemVirtualRow.index].name}</h5>
                                <p className="menuItemPrice"><i>{Business.CURRENCY}{filteredMenuItems[filteredMenuItemVirtualRow.index].originalPrice}</i></p>
                                <div className="menuItemTagContainer" style={{ marginTop: "5px" }}>
                                    {filteredMenuItems[filteredMenuItemVirtualRow.index].tags.map(tag => {
                                        if (tag === MenuItemTag.SPICY) return <img className="tagIcon" src={tagSpicyIcon} />;
                                        if (tag === MenuItemTag.VEGETARIAN) return <img className="tagIcon" src={tagVegetarianIcon} />;
                                        if (tag === MenuItemTag.HALAL) return <img className="tagIcon" src={tagHalalIcon} />;
                                        if (tag === MenuItemTag.KOSHER) return <img className="tagIcon" src={tagKosherIcon} />;
                                        if (tag === MenuItemTag.SEAFOOD) return <img className="tagIcon" src={tagSeafoodIcon} />;
                                        if (tag === MenuItemTag.SUGAR_FREE) return <img className="tagIcon" src={tagSugarFreeIcon} />;
                                        if (tag === MenuItemTag.LACTOSE_FREE) return <img className="tagIcon" src={tagLactoseFreeIcon} />;
                                        if (tag === MenuItemTag.GLUTEN_FREE) return <img className="tagIcon" src={tagGlutenFreeIcon} />;
                                        if (tag === MenuItemTag.PEANUT_FREE) return <img className="tagIcon" src={tagPeanutFreeIcon} />;
                                    })}
                                </div>
                                <div className="menuItemActionContainer">
                                    <MenuItemIconButton src={infoIcon} onClick={() => onMenuItemInfo(category, filteredMenuItems[filteredMenuItemVirtualRow.index])} />
                                    <MenuItemIconButton src={cartIcon} onClick={() => onAddItemToCart(category, filteredMenuItems[filteredMenuItemVirtualRow.index])} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function convertMenuItemToCartItem(
    category: Category,
    menuItem: MenuItem
): CartItem {
    const subTotal = menuItem.originalPrice;
    const tax = subTotal * (Business.TAX_PERCENTAGE / 100);
    const total = subTotal + tax;

    return {
        menuItemId: menuItem.id,
        menuItemName: menuItem.name,
        menuItemType: category.type,
        categoryId: category.id,
        categoryName: category.name,
        subTotal: subTotal,
        tax: tax,
        total: total
    };
}
