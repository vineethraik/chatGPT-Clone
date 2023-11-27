"use client";

import { isMobileView } from "@/lib/utils/layout";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileView: isMobileView(),
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setMobileView: (state, action) => {
      state.isMobileView = !!action.payload;
    },
  },
});

export const { setMobileView } = layoutSlice.actions;

export default layoutSlice.reducer;
