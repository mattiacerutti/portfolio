"use client";

import {useEffect} from "react";
import {OverlayScrollbars} from "overlayscrollbars";

export default function OverlayScrollbarsProvider() {
  useEffect(() => {
    const instance = OverlayScrollbars(document.body, {
      overflow: {
        x: "hidden",
        y: "scroll",
      },
      scrollbars: {
        autoHide: "scroll",
        autoHideSuspend: true,
        theme: "os-theme-page",
      },
    });

    return () => {
      instance.destroy();
    };
  }, []);

  return null;
}
