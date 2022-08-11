import React from "react";
import { useGlobalContext } from "../../context";
import "./CategoryList.scss";
import { AiFillHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import Loading from "../../Loading";
import { Link } from "react-router-dom";

function CategoryList() {
  let { data, loading, LikeFunc, BuyFunc, IncreaseAmount } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <article className="category__list">
      <div className="category__list_container">
        {data.map((data) => {
          const { id, image, title, price, like, buy } = data;

          const callAllFunctions = (id) => {
            LikeFunc(id);
          };
          const call = (id) => {
            BuyFunc(id);
            IncreaseAmount(id);
          };

          if (data.id === 2) {
            return (
              <div className="category__list_des" key={data.id}>
                <div className="category__list_img">
                  <img src={image} alt="" />
                  <span>
                    <BsSearch className="category__list_imgIcon" />
                    <AiFillHeart
                      className={`category__list_imgIcon ${
                        like ? "category__list_imgIconActive" : null
                      }`}
                      onClick={() => callAllFunctions(id)}
                    />
                    <FiShoppingCart
                      className={`category__list_imgIcon ${
                        buy ? "category__list_imgIconBuyActive" : null
                      }`}
                      onClick={() => call(id)}
                    />
                  </span>
                  <p className="category__list_imgDiscount">13% OFF</p>
                </div>
                <h3>{title}</h3>
                <p className="category__list_desHighlight">
                  <span className="category__list_desPrice">${price}</span>
                  <span className="">
                    <strike>$229.00</strike>
                  </span>
                </p>
              </div>
            );
          }
          return (
            <div className="category__list_des" key={data.id}>
              <div className="category__list_img">
                <img src={image} alt="" />
                <span>
                  <Link to={`/category/${id}`}>
                 
                    <BsSearch className="category__list_imgIcon" />
                  </Link>
                  <AiFillHeart
                    className={`category__list_imgIcon ${
                      like ? "category__list_imgIconActive" : null
                    }`}
                    onClick={() => callAllFunctions(id)}
                  />
                  <FiShoppingCart
                    className={`category__list_imgIcon ${
                      buy ? "category__list_imgIconBuyActive" : null
                    }`}
                    onClick={() => call(id)}
                  />
                </span>
              </div>
              <h3>{title}</h3>
              <p className="category__list_desPrice">${price}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default CategoryList;
