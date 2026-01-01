/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import type { MenuItemType } from "../constant/MenuItemType.ts";

export interface Category {
    id: string;     // UUID
    name: string;
    description: string;
    type: MenuItemType;
}