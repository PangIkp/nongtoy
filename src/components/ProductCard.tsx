import React from "react";
import "../Styles/ProductCard.scss";

interface ProductCardProps {
  productName: string;
  productPrice: string;
  productImage: string;
  productDescription: string;
//   onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productPrice,
  productImage,
  productDescription,
//   onAddToCart,
}) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={productImage} alt={productName} />
      </div>
      <div className="product-card__details">
        <h2 className="product-card__name">{productName}</h2>
        <p className="product-card__description">{productDescription}</p>
        <p className="product-card__price">{productPrice}</p>
        <button className="product-card__add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
