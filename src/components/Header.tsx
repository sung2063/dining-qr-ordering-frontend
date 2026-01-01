/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import storeLogo from "../assets/logo.svg";
import cartIcon from "../assets/cart.png";
import menuIcon from "../assets/menu.png";
import IconButton from "./IconButton";
import { useLocation, useNavigate } from "react-router-dom";
import { NavPath } from "../constant/NavPath";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const isMenuScreen = location.pathname == NavPath.MENU;
    const isCartScreen = location.pathname == NavPath.CART;
    const isConfirmationScreen = location.pathname == NavPath.CONFIRMATION;

    const onHeaderActionClicked = (path: string) => {
        console.log("Header option clicked. Navigate to: [" + path + "]");
        navigate(path);
    }

    return (
        <div className="topNavigation">
            <img id="storeLogo" src={storeLogo} alt="logo" />
            <div id="navigationMenu">
                {isMenuScreen && <IconButton src={cartIcon} onClick={() => onHeaderActionClicked(NavPath.CART)} />}
                {(isCartScreen || isConfirmationScreen) && <IconButton src={menuIcon} onClick={() => onHeaderActionClicked(NavPath.MENU)} />}
            </div>
        </div>
    )
}