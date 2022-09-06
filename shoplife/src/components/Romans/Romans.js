import React from "react";
import { Link } from "react-router-dom";
import "./romans.scss";

function Romans() {
  return (
    <div className="container mt-5">
      <div className="row"></div>
      <div className="row">
        <div className="col-sm-12 col-lg-2 col-md-12">
         
        </div>
        <div className="col-10">
          <div className="row">
            {/* <input placeholder="search" className="form-control" type="text" /> */}

            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3">
              <div class="card">
                <img
                  src={require("../../img/1.webp")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={"/RomanDetail"}>

                    Go
                  </Link>

                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3">
              <div class="card">
                <img
                  src={require("../../img/1.webp")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3">
              <div class="card">
                <img
                  src={require("../../img/1.webp")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3">
              <div class="card">
                <img
                  src={require("../../img/1.webp")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3">
              <div class="card">
                <img
                  src={require("../../img/1.webp")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3">
              <div class="card">
                <img
                  src={require("../../img/1.webp")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3">
              <div class="card">
                <img
                  src={require("../../img/1.webp")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3">
              <div class="card">
                <img
                  src={require("../../img/1.webp")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="paginations d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Romans;
