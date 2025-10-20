import React from "react";
import { X, Search } from "lucide-react";
import "./Sidebar.scss";

const GRID_MENU = [
  { id: "hot", title: "Hot", icon: "🔥" },
  { id: "blockchain", title: "Blockchain", icon: "🧊" },
  { id: "slot", title: "Slot", icon: "🎰" },
  { id: "cards", title: "Cards", icon: "🃏" },
  { id: "fishing", title: "Fishing", icon: "🐟" },
  { id: "live", title: "Live", icon: "👩‍💻" },
  { id: "sports", title: "Sports", icon: "⚽" },
  { id: "recent", title: "Recent", icon: "⏰" },
];

const STACK_MENU = [
  { id: "favorites", title: "Favorites", icon: "⭐" },
  { id: "records", title: "Bet Records", icon: "💰" },
  { id: "share", title: "Share", icon: "📤" },
  { id: "promote", title: "Promote", icon: "👥" },
];

const OFFERS = [
  { id: "event", title: "Event", color: "blue", icon: "🎡" },
  { id: "mission", title: "Mission", color: "green", icon: "📋" },
  { id: "rebate", title: "Rebate", color: "red", icon: "💸" },
  { id: "interest", title: "Interest", color: "lime", icon: "🐷" },
  { id: "vip", title: "VIP", color: "purple", icon: "👑" },
  { id: "fund", title: "Provide\nFund", color: "teal", icon: "💼" },
  { id: "unclaim", title: "Unclaim", color: "yellow", icon: "🎁" },
  { id: "history", title: "History", color: "orange", icon: "📜" },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    return (
      <>
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          {/* Header */}
          <div className="sidebar-header">
            <span className="logo">Menu</span>
            <button onClick={() => setSidebarOpen(false)} className="close-btn">
              <X size={20} />
            </button>
          </div>
  
          {/* Search */}
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <Search size={16} className="search-icon" />
          </div>
  
          {/* Scrollable Content */}
          <div className="sidebar-content">
            {/* Grid Menu */}
            <div className="grid-menu">
              {GRID_MENU.map((item) => (
                <div key={item.id} className="grid-item">
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.title}</span>
                </div>
              ))}
            </div>
  
            {/* Stack Menu */}
            <div className="stack-menu">
              {STACK_MENU.map((item) => (
                <div key={item.id} className="stack-item">
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.title}</span>
                </div>
              ))}
            </div>
  
            {/* Offer Center */}
            <div className="offer-center">
              <h4>Offer Center</h4>
              <div className="offer-grid">
                {OFFERS.map((offer) => (
                  <div key={offer.id} className={`offer-card ${offer.color}`}>
                    <span className="icon">{offer.icon}</span>
                    <span className="label">{offer.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Overlay */}
        {sidebarOpen && (
          <div className="overlay" onClick={() => setSidebarOpen(false)} />
        )}
      </>
    );
  }
  
