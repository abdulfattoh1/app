import React, { useState } from "react";
import "./CategoryNav.scss";

function CategoryNav() {
  const [toggleTab, setToggleTab] = useState(1);

  return (
    <aside className="category__nav">
      <div className="category__nav_tabs">
        <button
          className={`category__nav_btn ${
            toggleTab === 1 ? "category__nav_btnActive" : ""
          } `}
          onClick={() => setToggleTab(1)}
        >
          All Plants
        </button>
        <button
          className={`category__nav_btn ${
            toggleTab === 2 ? "category__nav_btnActive" : ""
          } `}
          onClick={() => setToggleTab(2)}
        >
          New Arrivals
        </button>
        <button
          className={`category__nav_btn ${
            toggleTab === 3 ? "category__nav_btnActive" : ""
          } `}
          onClick={() => setToggleTab(3)}
        >
          Sale
        </button>
      </div>
      <h4>Short by:</h4>
    </aside>
  );
}

export default CategoryNav;
