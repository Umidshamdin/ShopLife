import React from "react";
import "./romansdetail.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function RomansDetail() {
  return (
    <div className="container mt-5 examss">
      <div className="row">
        <div className="col-5">
          <Carousel>
            <div>
              <img src={require("../../img/1.webp")} className="romancarusel" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={require("../../img/1.webp")} className="romancarusel" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={require("../../img/1.webp")} className="romancarusel" />
              <p className="legend">Legend 1</p>
            </div>
          </Carousel>
        </div>
        <div className="col-7">
          <h5>Card Title</h5>
          <div className="stars d-flex">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>

            <div className="autorname">
              <p>
                by <span>John Doe</span>
              </p>
            </div>
          </div>

          <div className="addcard d-flex">
            <div className="number">
              <div className="mainnumber">- 1 +</div>
            </div>
            <div className="button2">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>


        </div>
      </div>

      <div className="row">
        <div className="col-12">
        <div className="tabmenumain mt-5">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, doloribus! Tenetur cum ea molestiae. Ipsa esse vero
                cum eveniet aperiam porro sed iste sequi sapiente nostrum,
                laudantium facere ipsum assumenda inventore architecto qui
                veritatis. Nulla culpa quia ipsum officiis reprehenderit nobis
                provident consequuntur quasi voluptatem perferendis facere sunt,
                nostrum cum tempora maiores veritatis, deleniti minima sint
                adipisci. Vitae autem odio aut asperiores excepturi, adipisci
                iusto culpa accusantium optio ullam fugiat porro, itaque qui ab
                aperiam saepe debitis ducimus et veritatis tenetur aliquam
                exercitationem. Temporibus aliquid quas enim dolorem nostrum
                sint, quibusdam cupiditate, doloremque ea quae unde repellendus
                deleniti porro similique?
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sequi?
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic dolore eligendi delectus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RomansDetail;
