import React from "react";
import { FaHome, FaGamepad, FaWallet, FaUserCircle, FaGift } from "react-icons/fa";
import "./BottomNav.scss";

export default function BottomNav({ setPage, currentPage }) {
  const buttons = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "games", icon: <FaGamepad />, label: "Games" },
    { id: "wallet", icon: <FaWallet />, label: "Wallet" },
    { id: "profile", icon: <FaUserCircle />, label: "Profile" },
    { id: "promos", icon: <FaGift />, label: "Promos" },
  ];

  return (
    <div className="bottom-nav">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          className={currentPage === btn.id ? "active" : ""}
          onClick={() => setPage(btn.id)}
        >
          {btn.icon}
          <span>{btn.label}</span>
        </button>
      ))}
    </div>
  );
}
