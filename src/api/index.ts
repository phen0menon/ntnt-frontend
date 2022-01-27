import axios from "axios";
import { config } from "../config";
import { Operation } from "../types";

const apiRequest = axios.create({
  baseURL: config.API_URL,
});

export const getOperations = () => apiRequest.get<Operation[]>("/operation");

export const createOperation = (data: { name: string }) =>
  apiRequest.post<Operation>("/operation", data);
