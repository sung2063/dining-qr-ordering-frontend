/*
 * ------------------------------------------------------------
 * Copyright (c) 2026 Software Bakery Inc.
 * All rights reserved.
 *
 * Company : Software Bakery Inc.
 * Author  : Sung Hyun Back
 * ------------------------------------------------------------
 */
import axios from "axios";

export async function getAPI<TResponse>(url: string): Promise<TResponse> {
  const response = await axios.get<TResponse>(url);
  return response.data;
}

export async function postAPI<TRequest, TResponse>(
  url: string,
  body?: TRequest
): Promise<TResponse> {
  const response = await axios.post<TResponse>(url, body);
  return response.data;
}

export async function putAPI<TRequest, TResponse>(
  url: string,
  body: TRequest
): Promise<TResponse> {
  const response = await axios.put<TResponse>(url, body);
  return response.data;
}

export async function patchAPI<TRequest, TResponse>(
  url: string,
  body: TRequest
): Promise<TResponse> {
  const response = await axios.patch<TResponse>(url, body);
  return response.data;
}

export async function deleteAPI<TResponse>(url: string): Promise<TResponse> {
  const response = await axios.delete<TResponse>(url);
  return response.data;
}
