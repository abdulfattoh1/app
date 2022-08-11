import React from "react";
import "./Category.scss";
function Category() {
  const item = [
    { title: "HousePlants", num: 33 },
    { title: "Potter Plants", num: 12 },
    { title: "Seeds", num: 65 },
    { title: "Small Plants", num: 39 },
    { title: "Big Plants", num: 23 },
    { title: "Succulents", num: 17 },
    { title: "Trerrariums", num: 19 },
    { title: "Gardening", num: 13 },
    { title: "Accessories", num: 18 },
  ];
  return (
    <section className="category">
      <div className="category__container">
        <h3 className="category__title">Categories</h3>
        <div className="category__container_item">
          {item.map((item, index) => {
            return (
              <ul key={index}>
                <li>
                  <p>{item.title}</p>
                  <p>({item.num})</p>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Category;
