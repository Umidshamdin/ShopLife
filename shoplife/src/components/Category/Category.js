import React from "react";
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
            Kitablar
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
          <ul className="pages">
            <li className="pagesName">
              <a href="">Home</a>
              
            </li>
            <li className="pagesName">
              <a href="">Blog</a>
              
            </li>
            <li className="pagesName">
              <a href="">About</a>
              
            </li>
            <li className="pagesName">
              <a href="">Contact</a>
              
            </li>
          </ul>

        </div>
       

    

       
      </div>
    </div>
  );
}

export default Category;
