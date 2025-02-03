"use client";
import React, { useState } from "react";
import "../Styles/MyPost.scss";

const ProfileDetail = () => {
  const [sortOption, setSortOption] = useState("Newest");

  return (
    <div className="sort-post">
      <div className="sort">
        <label htmlFor="sort-select">Sort by :</label>
        <select
          id="sort-select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
      <a href="/postmanage" className="post-btn">
        <span className="icon-container">
          <img
            src="/Images/CreatePost.png"
            alt="Post Icon"
            className="post-icon"
          />
        </span>
        Post
      </a>
      <div />
    </div>
  );
};

export default ProfileDetail;
