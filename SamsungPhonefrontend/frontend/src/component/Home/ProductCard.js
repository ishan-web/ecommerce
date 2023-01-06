import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const splitImage = product?.images.split("\\");

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img
        src={`http://localhost:4000/uploads/${splitImage[2]}`}
        alt={product.name}
      />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`Rs.${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
