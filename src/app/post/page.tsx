import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Profile from "@/components/Profile";
import PostDetail from "@/components/PostDetail";
import Comment from "@/components/Comment";

function post() {
  return (
    <div
      style={{ backgroundColor: "white", minHeight: "100vh", width: "100vw" }}
    >
      <Header />
      <Navbar />

      <div
        style={{
          paddingLeft: "15vw",
          paddingRight: "15vw",
          paddingTop: "160px",
          paddingBottom: "10vw",
        }}
      >
        <Profile />
        <PostDetail />
        <p style={{fontSize:"16",color: "black", paddingLeft: 5, marginBottom: 20}}>
          4 Comments
        </p>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}

export default post;
