"use client";
import { setMobileView } from "@/lib/redux/slices/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Root = ({ children }) => {
  const isMobileView = useSelector((state) => state.layout.isMobileView);
  const dispatch = useDispatch();
  useEffect(() => {
    let view = window.matchMedia("(max-width:700px)");
    view.onchange = (e) => {
      dispatch(setMobileView(e.matches));
    };
    return () => {
      view.onchange = () => {};
    };
  }, []);
  return <>{children}</>;
};
