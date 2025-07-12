import { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    const result = next(action);
    return result;
  };
export const middleware = [loggerMiddleware];
