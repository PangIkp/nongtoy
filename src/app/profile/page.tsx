"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Profile from "@/components/Profile";
import ProfileDetail from "@/components/ProfileDetail";
import PostCard from "@/components/PostCard";
// import "/Styles/PostCard.scss";

function profile() {
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
        <ProfileDetail />
        <div style={{padding:10}} className="post-container">
          <PostCard
            postName="HIRONO Reshape"
            postPrice="฿380.00"
            postImage="/Images/PostHino.png"
            postProvince="Bangkok"
            isProfilePage={true}
          />

          <PostCard
            postName="HIRONO Reshape"
            postPrice="฿380.00"
            postImage="/Images/PostHino.png"
            postProvince="Bangkok"
            isProfilePage={true}
          />

          <PostCard
            postName="HIRONO Reshape"
            postPrice="฿380.00"
            postImage="/Images/PostHino.png"
            postProvince="Bangkok"
            isProfilePage={true}
          />

          <PostCard
            postName="HIRONO Reshape"
            postPrice="฿380.00"
            postImage="/Images/PostHino.png"
            postProvince="Bangkok"
            isProfilePage={true}
          />

          <PostCard
            postName="HIRONO Reshape"
            postPrice="฿380.00"
            postImage="/Images/PostHino.png"
            postProvince="Bangkok"
            isProfilePage={true}
          />

          <PostCard
            postName="HIRONO Reshape"
            postPrice="฿380.00"
            postImage="/Images/PostHino.png"
            postProvince="Bangkok"
            isProfilePage={true}
          />
        </div>
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}

export default profile;
