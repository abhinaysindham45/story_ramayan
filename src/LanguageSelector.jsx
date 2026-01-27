import React from "react";
import { useLanguage } from "./LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{ position: "fixed", top: "10px", right: "10px", zIndex: 100 }}>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ padding: "5px", borderRadius: "5px" }}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="te">Telugu</option>
        <option value="ta">Tamil</option>
      </select>
    </div>
  );
}
