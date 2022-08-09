import React from "react";
import Slider from "react-slick";
import "../Bestseller/bestseller.scss";
function Bestseller() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mt-5">
      <Slider {...settings}>
        <div className="slider">
          <h3>
            <img
              className="sliderImgs"
              src={require("../../img/book-794978__340.webp")}
              alt=""
            />
            <p>by: Huqo</p>
            <h5>Sefiller</h5>
            <div className="bookPrise d-flex">
              <del>40 AZN</del>
              <h6>30 AZN</h6>
            </div>
          </h3>
        </div>

        <div className="slider">
          <h3>
            <img
              className="sliderImgs"
              src={require("../../img/book-794978__340.webp")}
              alt=""
            />
            <p>by: Huqo</p>
            <h5>Sefiller</h5>
            <div className="bookPrise d-flex">
              <del>40 AZN</del>
              <h6>30 AZN</h6>
            </div>
          </h3>
        </div>

        <div className="slider">
          <h3>
            <img
              className="sliderImgs"
              src={require("../../img/book-794978__340.webp")}
              alt=""
            />
            <p>by: Huqo</p>
            <h5>Sefiller</h5>
            <div className="bookPrise d-flex">
              <del>40 AZN</del>
              <h6>30 AZN</h6>
            </div>
          </h3>
        </div>

        <div className="slider">
          <h3>
            <img
              className="sliderImgs"
              src={require("../../img/book-794978__340.webp")}
              alt=""
            />
            <p>by: Huqo</p>
            <h5>Sefiller</h5>
            <div className="bookPrise d-flex">
              <del>40 AZN</del>
              <h6>30 AZN</h6>
            </div>
          </h3>
        </div>
        <div className="slider">
          <h3>
            <img
              className="sliderImgs"
              src={require("../../img/book-794978__340.webp")}
              alt=""
            />
            <p>by: Huqo</p>
            <h5>Sefiller</h5>
            <div className="bookPrise d-flex">
              <del>40 AZN</del>
              <h6>30 AZN</h6>
            </div>
          </h3>
        </div>

        <div className="slider">
          <h3>
            <img
              className="sliderImgs"
              src={require("../../img/book-794978__340.webp")}
              alt=""
            />
            <p>by: Huqo</p>
            <h5>Sefiller</h5>
            <div className="bookPrise d-flex">
              <del>40 AZN</del>
              <h6>30 AZN</h6>
            </div>
          </h3>
        </div>
         <div className="slider">
          <h3>
            <img
              className="sliderImgs"
              src={require("../../img/book-794978__340.webp")}
              alt=""
            />
            <p>by: Huqo</p>
            <h5>Sefiller</h5>
            <div className="bookPrise d-flex">
              <del>40 AZN</del>
              <h6>30 AZN</h6>
            </div>
          </h3>
        </div>

      </Slider>
    </div>
  );
}

export default Bestseller;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "../Bestseller/bestseller.scss"
// function Bestseller() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     arrows: true,

//     speed: 200,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     initialSlide: true,
//     autoplay: true,
//     cssEase: "linear",

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 2,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="container">
//       <div className="row mt-5">
//         <Slider {...settings}>
//           <div className="col-lg-3 col-md-6 col-sm-12 hous">
//             <div className="homeItem px-1">
//               <img
//                 className="homeImg"
//                 src={require("../../img/book-794978__340.webp")}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 hous">
//             <div className="homeItem px-1">
//               <img
//                 className="homeImg"
//                 src={require("../../img/book-794978__340.webp")}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 hous">
//             <div className="homeItem px-1">
//               <img
//                 className="homeImg"
//                 src={require("../../img/book-794978__340.webp")}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 hous">
//             <div className="homeItem px-1">
//               <img
//                 className="homeImg"
//                 src={require("../../img/book-794978__340.webp")}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 hous">
//             <div className="homeItem px-1">
//               <img
//                 className="homeImg"
//                 src={require("../../img/book-794978__340.webp")}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 hous">
//             <div className="homeItem px-1">
//               <img
//                 className="homeImg"
//                 src={require("../../img/book-794978__340.webp")}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 hous">
//             <div className="homeItem px-1">
//               <img
//                 className="homeImg"
//                 src={require("../../img/book-794978__340.webp")}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 hous">
//             <div className="homeItem px-1">
//               <img
//                 className="homeImg"
//                 src={require("../../img/book-794978__340.webp")}
//                 alt=""
//               />
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Bestseller;
