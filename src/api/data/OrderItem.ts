/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import type { MenuItemType } from "../constant/MenuItemType";

export interface OrderItem {
    id: string;     // UUID
    menuItemId: string;     // UUID
    menuItemName: string;
    menuItemType: MenuItemType;
    categoryId: string;     // UUID
    cateogryName: string;
    originalPrice: number;
    subTotal: number;
    tax: number;
    total: number;
    orderedDateTime: string;        // LocalDateTime
}