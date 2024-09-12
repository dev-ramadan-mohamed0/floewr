import React from "react";
import "./Nav.css";
function Nav() {

  function mode () {
    document.getElementsByTagName('*');
    for (var i = 0; i < document.getElementsByTagName('*').length; i++) {
      document.getElementsByTagName('*')[i].classList.toggle('dark')
      // document.getElementsByTagName('*')[i].style.color = 'black';
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg naav">
        <div className="container-fluid ch">
            <img src={require("../img/img25.png")}alt="logo"className="logo"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars icons"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="links">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Disabled</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Disabled</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Disabled</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Disabled</a>
              </li>
            </ul>
            <div>
              <div className="icon">
                <div className="shop">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="mode" onClick={mode}>
                  <i className="fa-solid fa-circle-half-stroke"></i>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
