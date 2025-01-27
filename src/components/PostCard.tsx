import React from "react";
import "../Styles/PostCard.scss"; // ต้องแน่ใจว่า SCSS นี้ถูกนำเข้าแล้ว

interface PostCardProps {
  postName: string;
  postPrice: string;
  postImage: string;
  postProvince: string;
}

const PostCard: React.FC<PostCardProps> = ({
  postName,
  postPrice,
  postImage,
  postProvince
}) => {
  return (
    <div className="post-card">
      <div className="post-card_image">
        <img src={postImage} alt={postName} />
      </div>
      <div className="post-card_details">
        <div className="layout">
          <p className="post-card_province">{postProvince}</p>
        </div>
        <h2 className="post-card_name">{postName}</h2>
        <p className="post-card_price">{postPrice}</p>
      </div>
    </div>
  );
};

export default PostCard;

