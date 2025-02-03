"use client";
import React from "react";
import { usePathname } from "next/navigation"; // ใช้ของ Next.js
import "../Styles/OrderItem.scss";

interface Product {
  image: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

interface OrderItemProps {
  storeName: string;
  status: string;
  products: Product[];
  totalPrice: number;
  subtotal: number;
  shippingFee: number;
  shippingDiscount: number;
}

const OrderItem: React.FC<OrderItemProps> = ({
  storeName,
  status,
  totalPrice,
  products,
  subtotal,
  shippingFee,
  shippingDiscount,
}) => {
  const pathname = usePathname(); // ใช้ของ Next.js

  return (
    <div className="order-card">
      <div className="order-header">
        <span className="store-name">{storeName}</span>
        <span className={`order-status ${status.toLowerCase()}`}>{status}</span>
      </div>

      <div className="order-products">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <span className="product-name">{product.name}</span>
              <span className="product-category">{product.category}</span>
              <span className="product-quantity">
                Quantity : {product.quantity}
              </span>
              <span className="product-price">
                ฿{product.price.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`order-footer ${
          pathname === "/orderdetail" ? "detailpage" : ""
        }`}
      >
        {/* แสดงเฉพาะในหน้า /orderdetail */}
        {pathname === "/orderdetail" && (
          <div className="order-summary">
            <span className="product-subtotal">
              Subtotal <span>฿{subtotal.toLocaleString()}</span>
            </span>

            <span className="product-shippingfee">
              Shipping Fee <span>฿{shippingFee.toLocaleString()}</span>
            </span>

            <span className="product-shippingdiscount">
              Shipping Discount{" "}
              <span>-฿{shippingDiscount.toLocaleString()}</span>
            </span>
          </div>
        )}


        <span className="total-price">
          <span style={{marginRight:5}}>Total price</span>
          <span>฿{totalPrice.toLocaleString()}</span>
        </span>
        <div />
        {/* ซ่อนปุ่ม See more ถ้าอยู่ที่ /orderdetail */}
        {pathname !== "/orderdetail" && (
          <a href="/orderdetail" className="see-more">
            See more
          </a>
        )}
      </div>
    </div>
  );
};

export default OrderItem;
