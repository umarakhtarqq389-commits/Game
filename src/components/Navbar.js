import React, { useState } from "react";
import { Menu, LogIn, UserPlus, X } from "lucide-react";
import "./Navbar.scss";

export default function Navbar({ setSidebarOpen }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login"); // "login" or "register"

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <header>
        {/* Toggle Button */}
        <button onClick={() => setSidebarOpen(true)} className="menu-btn">
          <Menu size={24} />
        </button>

        {/* Logo */}
        <h1>Five Game</h1>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <button onClick={() => openModal("login")}>
            <LogIn size={18} /> <span>Login</span>
          </button>
          <button onClick={() => openModal("register")}>
            <UserPlus size={18} /> <span>Register</span>
          </button>
        </div>
      </header>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="close-btn" onClick={() => setModalOpen(false)}>
              <X size={20} />
            </button>

            <h2>{modalType === "login" ? "Login" : "Register"}</h2>

            <form>
              {modalType === "register" && (
                <input type="text" placeholder="Username" required />
              )}
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              {modalType === "register" && (
                <input type="password" placeholder="Confirm Password" required />
              )}
              <button type="submit">
                {modalType === "login" ? "Login" : "Register"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
