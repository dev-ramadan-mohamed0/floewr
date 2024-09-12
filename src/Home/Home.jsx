import React from "react";
import "./Home.css";
function Frist() {
  const up = () => {
    const btn = document.querySelector(".up");
    window.onscroll = () => {
      if (window.scrollY >= 800) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };
    btn.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  };
  window.onload=up

  return (
    <div>  
      <button className="up">
        <i className="fa-solid fa-up-long"></i>
      </button>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-inner dd">
          <div className="carousel-item active pairat">
            <img
              src={require("../img/img12.jpg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption textp">
              <h1 className="ss">Welcome to Rosebud</h1>
              <h1 className="h1 d-none d-md-block">time to blossom</h1>
              <p className="p1 d-none d-md-block">
                A simply gorgeous WorldPress Thme Pack With everything you will
                nedd To create a website for you flower shop or florist business
                quicly and with ease.
              </p>
              <div className="bb">
              <button className="btn btn-light d-none d-md-block">READE MORE</button>
              <button className="btn btn-outline-light">READE MORE</button></div>
            </div>
          </div>

          <div className="carousel-item  pairat">
            <img
              src={require("../img/img15.jpg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption textp">
              <h1 className="ss">Welcome to Rosebud</h1>
              <h1 className="h1 d-none d-md-block">time to blossom</h1>
              <p className="p1 d-none d-md-block" >
                A simply gorgeous WorldPress Thme Pack With everything you will
                nedd To create a website for you flower shop or florist business
                quicly and with ease.
              </p>
              <div className="bb">
              <button className="btn btn-light d-none d-md-block">READE MORE</button>
              <button className="btn btn-outline-light">READE MORE</button></div>
            </div>
          </div>

          <div className="carousel-item pairat">
            <img
              src={require("../img/img23.jpg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption  textp">
              <h1 className="ss">Welcome to Rosebud</h1>
              <h1 className="h1 d-none d-md-block">time to blossom</h1>
              <p className="p1 d-none d-md-block">
                A simply gorgeous WorldPress Thme Pack With everything you will
                nedd To create a website for you flower shop or florist business
                quicly and with ease.
              </p>
              <div className="bb">
              <button className="btn btn-light d-none d-md-block">READE MORE</button>
              <button className="btn btn-outline-light">READE MORE</button></div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid pai1">
        <div className="row">
          <div className="col-md-4 col-sm-12 sc2">
            <div>
              <img src={require("../img/img05.png")} alt="" />
            </div>
            <div>
              <h4>Ready To Be Impressed</h4>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur</p>{" "}
              <span>adipisicing elitin uta</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 sc2">
            <div>
              <img src={require("../img/img06.png")} alt="" />
            </div>
            <div>
              <h4>Ready To Be Impressed</h4>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur </p>{" "}
              <span>adipisicing elitin uta</span>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 sc2">
            <div>
              <img src={require("../img/img07.png")} alt="" />
            </div>
            <div>
              <h4>Ready To Be Impressed</h4>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur</p>{" "}
              <span>adipisicing elitin uta</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pai">
        <div className="row d-flex justify-content-center m-5 text-center">
          <div
            className="col-sm-12 col-md-3 d-flex justify-content-center"
            style={{ marginBottom: "15px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={require("../img/img08.jpg")} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">ORANG SLIK</h5>
                <p className="card-text">$330</p>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-3 d-flex justify-content-center"
            style={{ marginBottom: "15px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={require("../img/img09.jpg")} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">DARK FOREST</h5>
                <p className="card-text">$330</p>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-3 d-flex justify-content-center"
            style={{ marginBottom: "15px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={require("../img/img10.jpg")} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">BEARL ROSES</h5>
                <div className="d-flex justify-content-center justify-content-evenly">
                  <del>$125</del> <p className="card-text">$100</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src={require("../img/img11.jpg")} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">RUSTIT DECOR</h5>
                <p className="card-text">$350</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pai2">
        <div className="row ">
        <div className="col-3 go text-center d-flex justify-content-center align-items-center flex-column">
            <div>
              <h3>86</h3>
            </div>
            <div><p>BLOG POSTES</p></div>
          </div>
          <div className="col-3 go text-center d-flex justify-content-center align-items-center flex-column">
            <div>
              <h3>25</h3>
            </div>
            <div><p>HAPPY CLIENTS</p></div>
          </div>
          <div className="col-3 go text-center d-flex justify-content-center align-items-center flex-column">
            <div>
              <h3>17</h3>
            </div>
            <div><p>WEB AWARDS</p></div>
          </div>
          <div className="col-3 go text-center d-flex justify-content-center align-items-center flex-column">
            <div>
              <h3>98</h3>
            </div>
            <div><p>FLOWER SORTS</p></div>
          </div>
        </div>
      </div>

      <div className="container pai3">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8 read">
            <h5 className="p5">Welcome guide</h5>
            <h1 className="ph5">A PERFECT SOPT</h1>
            <p>Lorem ipsum dolor sit amet, consectetu quam possimus exercitationem nisi laborum aperiam, vero voluptates Lorem ipsum dolor sit amet, consectetu quam po rerum consequuntur at!</p>
            <button className="btn btn-outline-dark">READE MORE</button>
          </div>
          <div className="col-md-4 img-red"><img src={require('../img/img14.jpg')} alt="" style={{width:'400px',height:'300px',backgroundSize:'cover'}}/></div>
          </div>
        </div>
      </div>
  );
}

export default Frist;
