"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./slices/layout";

const rootReducer = combineReducers({
  layout: layoutReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
