"use client";
import { ComponentProps, useState } from "react";
import "./styles.scss";
import { useUi } from "@/context/UiContext";

const ButtonMobile = (props: ComponentProps<"button">) => {
  const { menuOpen, setMenuOpen } = useUi();

  return (
    <button
      className={`menu_mobile ${menuOpen ? "open" : ""}`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <i className="line_m1"></i>
      <i className="line_m2"></i>
      <i className="line_m3"></i>
    </button>
  );
};

export default ButtonMobile;
