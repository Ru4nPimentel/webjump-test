"use client";
import NavCustom from "@/components/NavCustom";

import { useUi } from "@/context/UiContext";
import { INavCategories } from "@/types";

const NavCategories = ({ isMobile, isMenu, className }: INavCategories) => {
  const { menuOpen, ListNav } = useUi();

  if (ListNav.data?.items)
    return isMenu ? (
      <NavCustom
        list={ListNav.data?.items}
        initialLi={{ name: "Página Inicial", path: "/" }}
        lastlLi={{ name: "Contato", path: "/" }}
        className={`${className} ${menuOpen && isMobile ? "open" : ""}`}
      />
    ) : (
      <NavCustom list={ListNav.data?.items} className={`${className}`} />
    );

  return null;
};

export default NavCategories;
