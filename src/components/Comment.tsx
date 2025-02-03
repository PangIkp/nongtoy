import React from "react";
import "../Styles/Comment.scss";

const Comment = () => {
  return (
    <div className="comment-container">
      <div className="comment-info">
        <div className="comment-avatar">
          <img src="/Images/Profile.png" alt="User" />
        </div>
        <div className="comment-details">
          <h3>PaPang</h3>
          <p>that good, I like it that good, I like it that good, I like it</p>
        </div>
      </div>
      <div className="comment-date">
          2/8/2024
      </div>
    </div>
  );
};

export default Comment;
