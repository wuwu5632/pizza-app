// UserContext.tsx
"use client"
import { createContext, useState, FC, ReactNode } from 'react';

export interface IUserContext {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider: FC<IUserProviderProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <UserContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </UserContext.Provider>
  );
};