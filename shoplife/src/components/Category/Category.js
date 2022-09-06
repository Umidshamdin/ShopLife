import React from "react";
import { Link } from "react-router-dom";
import "../Category/category.scss";
function Category() {
  return (
    <div className="container">
      <div className="row menu">
        <div className="dropdown d-flex">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Kateqoriyalar
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li className="parent">
              <a href="#">
                <button className="btn btn-primary w-100">Kitablar</button>
              </a>
              <ul class="child">
                <li class="parent">
                  <a href="#">
                    Video Games <span class="expand">»</span>
                  </a>
                  <ul class="child">
                    <li>
                      <a href="#">Car</a>
                    </li>
                    <li>
                      <a href="#">Bike Race</a>
                    </li>
                    <li>
                      <a href="#">Fishing</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Barbies</a>
                </li>
                <li>
                  <a href="#">Teddy Bear</a>
                </li>
                <li>
                  <a href="#">Golf Set</a>
                </li>
              </ul>
            </li>

            <li className="parent">
              <a href="#">
                <button className="btn btn-primary w-100 mt-3">Telefonlar</button>
              </a>
              <ul class="child">
                <li class="parent">
                  <a href="#">
                    Video Games <span class="expand">»</span>
                  </a>
                  <ul class="child">
                    <li>
                      <a href="#">Car</a>
                    </li>
                    <li>
                      <a href="#">Bike Race</a>
                    </li>
                    <li>
                      <a href="#">Fishing</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Barbies</a>
                </li>
                <li>
                  <a href="#">Teddy Bear</a>
                </li>
                <li>
                  <a href="#">Golf Set</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Category;
