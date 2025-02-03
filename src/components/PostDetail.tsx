"use client";
import { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../Styles/Post.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Modal.setAppElement(document.body); // ให้ React Modal ทำงานอย่างถูกต้อง

const images = [
  "/Images/Preview1.png",
  "/Images/Preview2.png",
  "/Images/PostHino.png",
  "/Images/PostHino.png",
];

const PostDetail = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [isLiked, setIsLiked] = useState(false); // State สำหรับสถานะหัวใจ
  
    const openModal = (image: string) => {
      setSelectedImage(image);
      setModalIsOpen(true);
    };
  
    const handleHeartClick = () => {
      setIsLiked(!isLiked); // สลับสถานะเมื่อคลิก
    };  

  return (
    <div className="image-gallery">
      {/* Swiper สำหรับเลื่อนดูรูป */}
      <Swiper
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          // เมื่อความกว้างของหน้าจอเกิน 2000 แสดง 4 ภาพ
          2000: {
            slidesPerView: 4,
          },
          // เมื่อความกว้างของหน้าจอเกิน 1500px แสดง 3 ภาพ
          1000: {
            slidesPerView: 3,
          },
          // เมื่อความกว้างของหน้าจอเกิน 600px แสดง 2 ภาพ
          700: {
            slidesPerView: 2,
          },
          // เมื่อความกว้างของหน้าจอต่ำกว่า 600px แสดง 1 ภาพ
          500: {
            slidesPerView: 1,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Preview ${index}`}
              className="thumbnail"
              onClick={() => openModal(img)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal แสดงภาพเต็ม */}
      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            zIndex: 1000,
          },
        }}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <img src={selectedImage} alt="Full Size" className="full-image" />
        <button className="close-btn" onClick={() => setModalIsOpen(false)}>
          ✖
        </button>
      </Modal>

      <div className="post-details">
        <div className="post-header">
          <h2 className="post-name">HIRONO Reshape Series Figures</h2>
          {/* รูปหัวใจ */}
          <img
            src={isLiked ? "/Images/SelectHert.png" : "/Images/heart.png"} // เปลี่ยนรูปตามสถานะ
            alt={isLiked ? "Liked" : "Not Liked"}
            className={isLiked ? "SelectHert" : "heart"}
            onClick={handleHeartClick} // เพิ่มการคลิก
          />
          <p className="like">120</p>
        </div>

        <div className="layout">
          <p className="post-price">฿380</p>
          <div className="post-province-layout">
            <img
              src="/Images/Position.png"
              alt="Position"
              className="Position"
            />
            <p className="post-province">Bangkok</p>
          </div>
        </div>

        <p className="details">The good collection, you can tell me when you want it. The good collection, you can tell me when you want it. The good collection, you can tell me when you want it. The good collection, you can tell me when you want it.</p>

        <div className="condition">
            New
        </div>

        <div className="horizontal-line"></div>
      </div>
    </div>
  );
};

export default PostDetail;
