/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import type { MenuItemTag } from "../constant/MenuItemTag";

export interface MenuItem {
    id: string;     // UUID
    name: string;
    description: string;
    categoryId: string;     // UUID
    mainImage: string;
    originalPrice: number;
    tags: MenuItemTag[];
}