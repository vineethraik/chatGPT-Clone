"use client";

import { setMobileView } from "@/lib/redux/slices/layout";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const isMobileView = useSelector((state) => state.layout?.isMobileView);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}
