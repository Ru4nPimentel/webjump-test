"use client";
import useFetch from "@/hooks/useFetch";
import { API_URL } from "@/services/api";
import { IListArray, IUiContext } from "@/types";
import React, { useState } from "react";

export const UiContext = React.createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UiContext);
  if (context === null)
    throw new Error("useContext needs to be inside a provider");
  return context;
};

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ListNav = useFetch<IListArray>(`${API_URL}list`);

  return (
    <UiContext.Provider value={{ menuOpen, setMenuOpen, ListNav }}>
      {children}
    </UiContext.Provider>
  );
};
