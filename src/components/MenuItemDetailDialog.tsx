/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import { useTranslation } from "react-i18next";
import type { MenuItem } from "../api/data/MenuItem";
import { MenuItemTag } from "../api/constant/MenuItemTag";
import tagSpicyIcon from "../assets/tag_spicy.png";
import tagVegetarianIcon from "../assets/tag_vegetarian.png";
import tagHalalIcon from "../assets/tag_halal.png";
import tagKosherIcon from "../assets/tag_kosher.png";
import tagSeafoodIcon from "../assets/tag_seafood.png";
import tagSugarFreeIcon from "../assets/tag_sugar_free.png";
import tagLactoseFreeIcon from "../assets/tag_lactose_free.png";
import tagGlutenFreeIcon from "../assets/tag_gluten_free.png";
import tagPeanutFreeIcon from "../assets/tag_peanut_free.png";
import { useEffect } from "react";
import type { Category } from "../api/data/Category";
import { Business } from "../constant/Business";

type MenuItemDetailDialogProps = {
    isOpen: boolean;
    category: Category;
    menuItem: MenuItem;
    onAddItemToCart: (category: Category, menuItem: MenuItem) => void;
    onClose: () => void;
};

export default function MenuItemDetailDialog({ isOpen, category, menuItem, onAddItemToCart, onClose }: MenuItemDetailDialogProps) {
    const { t } = useTranslation();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const onAddToCartBtnClicked = () => {
        onAddItemToCart(category, menuItem);
        onClose();
    }

    return (
        <div className="dialogOverlay">
            <div className="dialogContent" onClick={e => e.stopPropagation()}>
                <button className="closeButton" onClick={onClose}>×</button>
                <img className="menuItemImage" src={menuItem?.mainImage} />
                <div className="menuItemIntro">
                    <h5 className="menuItemName">{menuItem?.name}</h5>
                    <p className="menuItemDescription">{menuItem?.description}</p>
                    <p className="menuItemPrice" style={{ marginTop: "5px" }}><i>{Business.CURRENCY}{menuItem?.originalPrice}</i></p>
                    <div className="menuItemTagContainer" style={{ marginTop: "5px" }}>
                        {menuItem?.tags.map(tag => {
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
                    <button className="roundedButtonSmall" style={{ marginTop: "15px" }} onClick={() => onAddToCartBtnClicked()}>{t("menu.addToCart")}</button>
                </div>
            </div>
        </div>
    );
}