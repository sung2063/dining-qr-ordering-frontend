/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import { getAPI, postAPI } from "./Api";
import type { Order } from "./data/Order";
import type { OrderRequest } from "./data/OrderRequest";

const API_BASE = import.meta.env.VITE_API_URL;

// Place an new order
export const postOrder = (request: OrderRequest) => {
  return postAPI<OrderRequest, Order>(`${API_BASE}/order`, request);
};

// Retrieve all orders
export const getAllOrders = () => {
  return getAPI<Order[]>(`${API_BASE}/order`);
};