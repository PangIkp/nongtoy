"use client";
import React, { useState, useRef, useEffect } from "react";
import "../Styles/CreatePost.scss";

const Post: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [productName, setProductName] = useState("");
  const [details, setDetails] = useState("");
  const [province, setProvince] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [postType, setPostType] = useState("normal");
  const [showImageModal, setShowImageModal] = useState(false);
  const [isPostClosed, setIsPostClosed] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // อัพโหลดรูป
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);

      // ตรวจสอบถ้าจำนวนไฟล์เกิน 5
      if (selectedImages.length + filesArray.length > 5) {
        setShowImageModal(true); // แสดง modal แจ้งเตือน
        return;
      }

      setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleImageRemove = (index: number) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleClick = (type: "normal" | "special") => {
    setPostType(type);
  };

  // post mode
  const handleTogglePost = () => {
    setShowPostModal(true); // เปิด popup สำหรับ Close post
  };

  const confirmTogglePost = () => {
    setIsPostClosed((prev) => !prev); // Toggle ค่า Close/Open
    setShowPostModal(false); // ปิด popup
  };

  const closeModal = () => {
    setShowImageModal(false); // ปิด modal
    setShowModal(false);
  };

  // post
  const handlePostClick = () => {
    setShowModal(true);
  };

  return (
    <div className="create-post">
      <h2>
        Post
        <button className="close-post" onClick={handleTogglePost}>
          {isPostClosed ? "Open post" : "Close post"}
        </button>
      </h2>
      <div className="post-container">
        {/* ซ้าย: ฟอร์ม */}
        <div className="post-form">
          <label>Product image</label>
          <div className="image-upload">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
            />
            <span>{selectedImages.length}/5</span>

            <div className="image-previews">
              {selectedImages.map((image, index) => (
                <div key={index} className="image-preview-container">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`preview-${index}`}
                    width="100"
                    height="100"
                  />
                  <button
                    className="remove-image"
                    onClick={() => handleImageRemove(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <label>Product name</label>
          <input
            type="text"
            placeholder="Product name must be at least 4 characters long"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <div className="textarea-container">
            <label>Details</label>
            <textarea
              placeholder="Additional product information"
              maxLength={500}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <span>{details.length}/500</span>
          </div>

          <label>Province</label>
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            style={{ color: province === "" ? "#9f9f9f" : "black" }} // เปลี่ยนสีข้อความ
          >
            <option value="" disabled hidden>
              Select your province
            </option>
            <option value="Bangkok">Bangkok</option>
            <option value="Chiangmai">Chiangmai</option>
          </select>

          <div className="price-condition">
            <div>
              <label>Price</label>
              <input
                type="text"
                placeholder="Enter price of product"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="price-input"
              />
            </div>

            <div>
              <label>Condition</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                style={{ color: condition === "" ? "#9f9f9f" : "black" }} // เปลี่ยนสีข้อความ
              >
                <option value="" disabled hidden>
                  Select condition of art toy
                </option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
            </div>
          </div>

          {/* Select post type */}
          <label>Select post type</label>
          <div className="post-type">
            <div
              className={postType === "normal" ? "active" : ""}
              onClick={() => handleClick("normal")}
            >
              <span>Normal</span>
              <p>
                • Free 20 posts per day
                <br />• Always under special posts
              </p>
              <strong>free</strong>
            </div>
            <div
              className={postType === "special" ? "active" : ""}
              onClick={() => handleClick("special")}
            >
              <img src="Images/Recommend.png" className="recommended" />
              <span>Special</span>
              <p>
                • Before the normal announcement
                <br />• Return to normal announcement after 7 days
              </p>
              <strong>฿50</strong>
            </div>
          </div>
        </div>

        {/* ขวา: ตัวอย่างโพสต์ */}
        <div className="post-preview">
          <label>Post sample</label>
          <div className="preview-box">
            <div className="preview-image">
              {selectedImages.length > 0 && (
                <img
                  src={URL.createObjectURL(selectedImages[0])}
                  alt="Uploaded Preview"
                  width="100%"
                />
              )}
            </div>
            <p>
              {productName || "Enter product name"}{" "}
              {/* แสดงค่าเริ่มต้นถ้า input ว่าง */}
              <span>
                <img src="/Images/heart.png" alt="heart" />
              </span>
            </p>
            <h2>
              ฿{price || "0"}
              <span>
                <img src="/Images/Position.png" alt="location" />
                {province || "Select your province"} {/* แสดงค่าที่เลือก */}
              </span>
            </h2>
          </div>
          <button className="post-btn" onClick={handlePostClick}>
            Post
          </button>
        </div>
      </div>

      {/* pop up แจ้งเตือน */}
      {showImageModal && (
        <div className="modal">
          <div className="modal-content">
            <p>You can upload no more than 5 photos.</p>
            <button className="close-btn" onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      )}

      {/* Popup สำหรับ Post */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to post this?</p>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={closeModal}>
                Yes
              </button>
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup คอนเฟิร์ม Close/Open Post */}
      {showPostModal && (
        <div className="modal">
          <div className="modal-content">
            <p>
              {isPostClosed
                ? "Do you want to enable visibility of this post?"
                : "Do you want to disable the visibility of this post?"}
            </p>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={confirmTogglePost}>
                Yes
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowPostModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
