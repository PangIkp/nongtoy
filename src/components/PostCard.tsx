import React, { useState } from "react";
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
  postProvince,
}) => {
  const [isLiked, setIsLiked] = useState(false); // State สำหรับสถานะหัวใจ

  const handleHeartClick = () => {
    setIsLiked(!isLiked); // สลับสถานะเมื่อคลิก
  };

  return (
    <div className="post-card">
      <div className="post-card_image">
        <img src={postImage} alt={postName} />
      </div>
      <div className="post-card_details">
        <div className="post-card_header">
          <h2 className="post-card_name">{postName}</h2>
          {/* รูปหัวใจ */}
          <img
            src={isLiked ? "/Images/SelectHert.png" : "/Images/heart.png"} // เปลี่ยนรูปตามสถานะ
            alt={isLiked ? "Liked" : "Not Liked"}
            className={isLiked ? "SelectHert" : "heart"}
            onClick={handleHeartClick} // เพิ่มการคลิก
          />
        </div>

        <div className="layout">
          <p className="post-card_price">{postPrice}</p>
          <div className="post-card_province-layout">
            <img
              src="/Images/Position.png"
              alt="Position"
              className="Position"
            />
            <p className="post-card_province">{postProvince}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
