import React, { useState } from "react";
import "../Styles/PostCard.scss";

interface PostCardProps {
  postName: string;
  postPrice: string;
  postImage: string;
  postProvince: string;
  isProfilePage?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  postName,
  postPrice,
  postImage,
  postProvince,
  isProfilePage = false,
}) => {
  const [isLiked, setIsLiked] = useState(false); // State สำหรับสถานะหัวใจ

  const handleHeartClick = () => {
    setIsLiked(!isLiked); // สลับสถานะเมื่อคลิก
  };

  return (
    <div className="post-card">
      <div>
        <a href="/post" className="post-card_image">
          <img src={postImage} alt={postName} />
        </a>
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
              {/* ซ่อนรูป Position เมื่ออยู่ในหน้า Profile */}
              {!isProfilePage && (
                <img
                  src="/Images/Position.png"
                  alt="Position"
                  className="Position"
                />
              )}

              {/* แสดงข้อความ Province หรือปุ่ม Edit เมื่ออยู่ในหน้า Profile */}
              {isProfilePage ? (
                <a href="/postmanage" className="edit-btn">Edit</a> // แสดงปุ่ม Edit ในหน้า Profile
              ) : (
                <p className="post-card_province">{postProvince}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
