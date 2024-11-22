import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";


const Cart = () => {
  const [data, setData] = useState([]);
  console.log(data);
  

  useEffect(() => {
    // axios.get("https://northwind.vercel.app/api/categories").then((res) => {
    //   const filteredData = res.data.filter(item => item.title != undefined)
    //   setData(filteredData)
    // });

    setData(JSON.parse(localStorage.getItem('cart')))
  }, []);

  return (
    <>
    {/* <Layout> */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data && data.map((item) => (
          <Card
          item={item}
          />
        ))}
      </div>
    {/* </Layout> */}
        </>
  );
};

export default Cart;