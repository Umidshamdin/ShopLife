import React from "react";
import Bestseller from "../components/Bestseller/Bestseller";
import Category from "../components/Category/Category";
import CategoryCarusel from "../components/CategoryCarusel/CategoryCarusel";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";

function Home() {
  return (
    <>
      <Navbar />
      <hr />
      <Category/>
      <Slider />
      <Bestseller/>
      <CategoryCarusel/>

    </>
  );
}

export default Home;
