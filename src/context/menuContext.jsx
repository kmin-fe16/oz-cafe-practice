import { createContext, useContext, useState } from "react";
import data from "../assets/data";

const MenuContext = createContext(null);

export function MenuProvider({ children }) {
  const [menu] = useState(data.menu);
  const [options] = useState(data.options);

  return (
    <MenuContext.Provider value={{ menu, options }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
