/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import { createContext, useContext, useState } from "react";
import type { MenuItem } from "../api/data/MenuItem";
import type { Category } from "../api/data/Category";

type MenuContextType = {
    categories: Category[];
    menuItems: MenuItem[];
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
    setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    return (
        <MenuContext.Provider value ={{ categories, menuItems, setCategories, setMenuItems }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    const ctx = useContext(MenuContext);
    if (!ctx) {
        throw new Error("useContext must be used inside <MenuProvider>");
    }
    return ctx;
}