import React from "react";
import "./Profile.scss";

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="avatar">
          <img
            src="https://via.placeholder.com/120"
            alt="User Avatar"
          />
        </div>
        <h2 className="username">John Doe</h2>
        <p className="email">johndoe@example.com</p>
      </div>

      <div className="profile-details">
        <h3>Account Details</h3>
        <ul>
          <li><span>Username:</span> JohnDoe123</li>
          <li><span>Email:</span> johndoe@example.com</li>
          <li><span>Member Since:</span> Jan 2023</li>
          <li><span>Status:</span> Active</li>
        </ul>
      </div>

      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
}
