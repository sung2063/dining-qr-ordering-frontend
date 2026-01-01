/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import type { MenuItemType } from "../api/constant/MenuItemType.ts";

export interface CartItem {
    menuItemId: string;     // UUID
    menuItemName: string;
    menuItemType: MenuItemType;
    categoryId: string;     // UUID
    categoryName: string;
    subTotal: number;
    tax: number;
    total: number;
}
