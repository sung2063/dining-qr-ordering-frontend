/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import type { OrderItem } from "./OrderItem";

export interface Order {
    id: string;     // UUID
    items: OrderItem[];
    orderedDateTime: string;        // LocalDateTime
}