import React from "react";
import "../Styles/Profile.scss";

const Profile = () => {
  return (
    <div className="profile-container">
      <a href="/profile" className="profile-info">
        <div className="profile-avatar">
          <img src="/Images/Profile.png" alt="User" />
        </div>
        <div className="profile-details">
          <h3>Veronica</h3>
          <p>200 posts</p>
        </div>
      </a>

      <div className="profile-actions">
        <button className="btn">
          <img src="/Images/Mail.png" alt="Email" className="icon" />
          Email
        </button>
        <button className="btn">
          <img src="/Images/PhoneNum.png" alt="Phone" className="icon" />
          Phone
        </button>
      </div>
    </div>
  );
};

export default Profile;
