"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import "../Styles/OrderItem.scss";

const Menu = () => {
  const router = useRouter();
  const pathname = usePathname(); // ตรวจจับ URL ปัจจุบัน

  return (
    <div className="order_wrapper">
      <div className="order_container">
        <div className="order_content">
          <div className="content_order">
            <p className="myaccount_text">
              Hello, <span className="myaccount_text_name">PaPang</span>
            </p>
            <div className="myaccount_btn">
              {/* ปุ่ม Information */}
              <a
                href="/account"
                className="myaccount_btn_info"
                style={{
                  background: pathname === "/account" ? "#caf0f8" : "white",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/account");
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#f0fcff")}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    pathname === "/account" ? "#caf0f8" : "white")
                }
              >
                <img src="Images/Info.png" alt="" />
                <p>Information</p>
              </a>

              {/* ปุ่ม Order History */}
              <a
                href="/order"
                className="myaccount_btn_Orderhistory"
                style={{
                  background: pathname === "/order" ? "#caf0f8" : "white",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/order");
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#f0fcff")}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    pathname === "/order" ? "#caf0f8" : "white")
                }
              >
                <img src="Images/OrderHistory.png" alt="" />
                <p>Order History</p>
              </a>

              {/* ปุ่ม Logout */}
              <a
                href="/"
                className="myaccount_btn_logout"
                style={{
                  background: pathname === "/" ? "#caf0f8" : "white",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#f0fcff")}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    pathname === "/" ? "#caf0f8" : "white")
                }
              >
                <img src="Images/Logout.png" alt="" />
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
