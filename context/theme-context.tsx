"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children
}: ThemeContextProviderProps) {

     const [theme, setTheme] = useState<Theme>('light');
    
        const toggleTheme = () => {
    
            const isDark = document.documentElement.classList.contains("dark");
            if (isDark) {
              document.documentElement.classList.remove('dark');
              window.localStorage.setItem('theme', 'light');
              setTheme('light');
            } else {
              document.documentElement.classList.add('dark');
              window.localStorage.setItem('theme', 'dark');
              setTheme('dark');
            }
        }
    
        useEffect(() => {
          const localTheme = window.localStorage.getItem('theme') as Theme | null;
    
          if (localTheme) {
            setTheme(localTheme);
            document.documentElement.classList.toggle('dark', localTheme === 'dark');
          } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = prefersDark ? 'dark' : 'light';
    
            setTheme(initialTheme);
            document.documentElement.classList.toggle('dark', prefersDark);
            window.localStorage.setItem('theme', initialTheme)
              
          }
        }, [])
        
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
}