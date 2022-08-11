import React from "react";
import Category from "./main/Category";
import CategoryNav from "./main/CategoryNav";
import CategoryList from "./main/CategoryList";
import "./Main.scss";

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <Category />
        <div className="main__container_right">
          <CategoryNav />
          <CategoryList />
        </div>
      </div>
    </main>
  );
}

export default Main;
