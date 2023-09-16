import React, { createContext, useReducer, useContext, useMemo } from "react";

// Define el estado inicial
export const initialState = {
  theme: "light", // Inicialmente, el tema es claro
  data: [], // Inicialmente, no hay datos de la API
};

// Crea el contexto global
export const GlobalContext = createContext();

// Define un reducer para manejar las acciones
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      // Cambia el tema entre "light" y "dark"
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_API_DATA":
      // Actualiza los datos de la API
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

// Define el proveedor de contexto
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Utiliza useMemo para evitar que el valor del contexto se actualice innecesariamente
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext debe ser utilizado dentro de un GlobalContextProvider");
  }
  return context;
}
