import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
// import { AiFillHeart } from "react-icons/ai";

function CategoryPage() {
  const [newCart, setNewCart] = useState([]);
  let { data } = useGlobalContext();
  let { id } = useParams();

  useEffect(() => {
    const newData = data.find((data) => data.id === parseInt(id));
    setNewCart(...newData);
  }, [data, id]);
  Object.keys(newCart).map((item) => {
    console.log(item);
  });
  //   console.log(newCart);
  return (
    <div>
      <h1>Hello world</h1>
      <p></p>
    </div>
  );
}

export default CategoryPage;
