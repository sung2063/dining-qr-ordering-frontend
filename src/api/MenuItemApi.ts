/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import { getAPI } from "./Api";
import type { MenuItem } from "./data/MenuItem"

const API_BASE = import.meta.env.VITE_API_URL;

// Retrieve menu items
export const getMenuItems = () => {
  return getAPI<MenuItem[]>(`${API_BASE}/menu-item`);
};
