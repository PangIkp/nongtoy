import React from "react";
import "../Styles/ProductCard.scss";

interface ProductCardProps {
  productName: string;
  productPrice: string;
  productImage: string;
  productBrand: string;
  productQty: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productPrice,
  productImage,
  productQty,
  productBrand,
  //   onAddToCart,
}) => {
  return (
    <div className="product-card">
      <div className="product-card_image">
        <img src={productImage} alt={productName} />
      </div>
      <div className="product-card_details">
        <div className="layout">
          <p className="product-card_brand">{productBrand}</p>
          <p className="product-card_qty">{productQty}</p>
        </div>
        <h2 className="product-card_name">{productName}</h2>
        <p className="product-card_price">{productPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
