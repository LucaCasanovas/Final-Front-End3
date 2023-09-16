import React, { createContext, useReducer, useContext, useMemo } from "react";


export const initialState = {
  theme: "light", 
  data: [], 
};

export const GlobalContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_API_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext debe ser utilizado dentro de un GlobalContextProvider");
  }
  return context;
}
