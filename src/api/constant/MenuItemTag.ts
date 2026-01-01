/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
export const MenuItemTag = {
  SPICY: "SPICY",
  VEGETARIAN: "VEGETARIAN",
  HALAL: "HALAL",
  KOSHER: "KOSHER",
  SEAFOOD: "SEAFOOD",
  SUGAR_FREE: "SUGAR_FREE",
  LACTOSE_FREE: "LACTOSE_FREE",
  GLUTEN_FREE: "GLUTEN_FREE",
  PEANUT_FREE: "PEANUT_FREE"
} as const;

export type MenuItemTag = keyof typeof MenuItemTag;
