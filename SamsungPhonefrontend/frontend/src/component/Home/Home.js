import React, { Fragment, useEffect } from "react";

import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="GuitarStation" />

          <div className="banner">
            <p>Welcome to GuitarStation</p>
            <h1>FIND THE GUITAR WITH BEST QUALITY</h1>

            <a href="#container">
              <button>
                Scroll 
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Shoes Collection</h2>

          <div className="container" id="container">
            {products?.length > 0 ? (
              products &&
              products?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <h1>No Products Available</h1>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
