import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import Hero from "./components/Hero";
import CategoryBar from "./components/CategoryBar";
import GamesSection from "./components/Game";
import Wallet from "./components/Wallet"; 
import Profile from "./components/Profile";
import Promos from "./components/Promo";

import "./App.scss";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Hot");
  const [page, setPage] = useState("home"); // home, games, wallet, profile, promos

  return (
    <div className="min-h-screen flex items-center justify-center bg-grey-200 p-2">
      {/* Phone Container */}
      <div className="relative w-full max-w-xs md:max-w-sm h-full md:h-[700px] bg-black shadow-2xl rounded-2xl flex flex-col overflow-hidden">
        
        {/* Navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          
          {/* Home Page */}
          {page === "home" && (
            <>
              <div className="w-full h-64 md:h-72">
                <Hero />
              </div>

              <div className="sticky top-0 z-10 bg-white">
                <CategoryBar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>

              <div className="flex-1 p-2 mt-2">
                <GamesSection selectedCategory={selectedCategory} />
              </div>
            </>
          )}

          {/* Games Page */}
          {page === "games" && (
            <div className="flex-1 p-2">
              <GamesSection selectedCategory={selectedCategory} />
            </div>
          )}

          {/* Wallet Page */}
          {page === "wallet" && (
            <div className="flex-1">
              <Wallet />
            </div>
          )}

          {/* Profile Page */}
          {page === "profile" && (
            <div className="flex-1">
              <Profile />
            </div>
          )}

          {/* Promos Page */}
          {page === "promos" && (
            <div className="flex-1">
              <Promos />
            </div>
          )}
        </main>

        {/* Bottom Navigation */}
        <BottomNav setPage={setPage} currentPage={page} />
      </div>
    </div>
  );
}
