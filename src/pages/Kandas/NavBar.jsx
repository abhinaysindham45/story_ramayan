import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const kandas = [
    { name: "Home", path: "/" },
    { name: "Bala Kanda", path: "/bala-kanda" },
    { name: "Ayodhya Kanda", path: "/ayodhya-kanda" },
    { name: "Aranya Kanda", path: "/aranya-kanda" },
    { name: "Kishkindha Kanda", path: "/kishkindha-kanda" },
    { name: "Sundara Kanda", path: "/sundara-kanda" },
    { name: "Yuddha Kanda", path: "/yuddha-kanda" },
    { name: "Uttara Kanda", path: "/uttara-kanda" },
  ];

  return (
    <nav className="kanda-navbar">
      <ul className="kanda-nav-list">
        {kandas.map((k, i) => (
          <li
            key={i}
            onClick={() => navigate(k.path)}
            className={`kanda-nav-item ${
              location.pathname === k.path ? "active" : ""
            }`}
          >
            {k.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
