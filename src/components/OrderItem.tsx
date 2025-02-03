import React from "react";
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
}

const OrderItem: React.FC<OrderItemProps> = ({
  storeName,
  status,
  totalPrice,
  products,
}) => {
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

      <div className="order-footer">
        <span className="total-price">
          Total price : {totalPrice.toLocaleString()}
        </span>
        <button className="see-more">See more</button>
      </div>
    </div>
  );
};

export default OrderItem;
