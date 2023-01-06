import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  const splitImage = item?.image?.split("\\");
  console.log(splitImage);
  return (
    <div className="CartItemCard">
      <img src={`http://localhost:4000/uploads/${splitImage[2]}`} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: Rs.${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;
