import React from "react";
import Bestseller from "../components/Bestseller/Bestseller";
import Category from "../components/Category/Category";
import CategoryCarusel from "../components/CategoryCarusel/CategoryCarusel";
import Reklam from "../components/Reklam/Reklam";
import Slider from "../components/Slider/Slider";

function Home() {
  return (
    <>
     
      <hr />
      <Category/>
     
      <Slider />
      <Reklam></Reklam>
      <Bestseller/>

     

      <CategoryCarusel></CategoryCarusel>

    

     

    </>
  );
}

export default Home;
