import React, { createContext, useContext, useState } from "react";

// Step 1: Create a Context
const LanguageContext = createContext();

// Step 2: Make a provider (like a global variable)
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Step 3: This helps any file use the selected language easily
export const useLanguage = () => useContext(LanguageContext);
