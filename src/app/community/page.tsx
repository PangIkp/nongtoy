import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import PostFilter from "@/components/PostFilter";

function Community() {
  return (
    <div
      style={{ backgroundColor: "white", minHeight: "100vh", width: "100vw" }}
    >
      <Header />
      <Navbar />

      <div className="image-community">
        <div className="Community">
          <img
            src="/Images/Community.png"
            alt="Community"
            className="Community"
          />

          {/* ปุ่มจะอยู่ที่มุมขวาบนของภาพ */}
          <a href="/postmanage" className="community-button">
            Create Post
            <img
              src="/Images/CreatePost.png"
              alt="CreatePost"
              className="CreatePost"
            />
          </a>
        </div>
      </div>

      <div
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          paddingTop: "2vw",
          paddingBottom: "10vw",
        }}>
        <PostFilter/>

      </div>

      <Footer />
      <Copyrights />
    </div>
  );
}

export default Community;
