import React, { createContext, useContext } from "react";
import type { ToastContextType } from "../../types/toast.types";

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
);

export const useToastContext = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within ToastProvider");
  }
  return context;
};
