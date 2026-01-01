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
import type { Category } from "./data/Category";

const API_BASE = import.meta.env.VITE_API_URL;

// Retrieve categories
export const getCategories = () => {
  return getAPI<Category[]>(`${API_BASE}/category`);
};
