import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
import Payment from "../Payment/Payment";
import service1 from "../../../assets/service1.jpg";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";
import service4 from "../../../assets/service4.png";
import service5 from "../../../assets/service5.png";
import service6 from "../../../assets/service6.png";
import AdminSignUp from "../../Admin/AdminSignUp";

export default function Service({ customerDetails }) {
  return (
    <>
      <div className="container servicecontainer" id="services">
        <h1 className="serviceheader">Our Services</h1>
        <div className="cards_parent">

          <div className="card workcard">
            <div className=" workcard_body">
              <img
                src={service1}
                alt="Electrical Shops"
              />
              <h3 className="  text-truncate workname">
                Electrical Shops
              </h3>
              <span className="text justify-content  ">
                Find the nearest shops of your electrical  materials.
              </span>
              <div className="d-block  ">
                <Link to="/Eshops">
                  <button className=" btn service_btn btn-warning">e-Shop</button>
                </Link>
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service2} width={30} alt="Mechanic shops" />
              <h3 className="  text-truncate workname">Mechanic shops</h3>
              <span className="text justify-content  ">
                Find the nearest Mechanic shops of your mechanical needs.
              </span>
              <div className="d-block  ">
              <Link to="/Mshops">
                  <button className=" btn service_btn btn-warning">m-Shop</button>
                </Link>
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
               
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service3} width={30} alt="Plumbing shops" />
              <h3 className="  text-truncate workname">Hardware shops</h3>
              <span className="text justify-content  ">
                Find the nearest  shops of your Hardware materials.              </span>
              <div className="d-block  ">
              <Link to="/Pshops">
                  <button className=" btn service_btn btn-warning">Hardware-Shop</button>
                </Link>
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service4} width={30} alt="Find Workers" />
              <h3 className="  text-truncate workname">Find Workers</h3>
              <span className="text justify-content  ">
                Find the workers you need to make your work done
              </span>
              <div className="d-block  ">
                <Link to="/CustomerSignin">
                  <button className=" btn service_btn btn-warning">Workers</button>
                </Link>
       
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service5} width={30} alt="Shop Join" />
              <h3 className="  text-truncate workname">Shop Join</h3>
              <span className="text justify-content  ">
                Join your shop with us and sell your items online
              </span>
              <br />
              <div className="d-block  ">
                <Link to="/ShopJoin">
                  <button className="  btn service_btn btn-warning" data-inline="true">
                    Add Shop
                  </button>
                </Link>
                <Link to="/ShopSignin">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service6} width={30} alt="Workers Join" />
              <h3 className="  text-truncate workname">Labours Join</h3>
              <span className="text justify-content  ">
                Workers can join our website and get work.
              </span>
              <div className="d-block  ">
                <Link to="/workerJoin">
                  <button className=" btn service_btn btn-warning">Join</button>
                </Link>
                <Link to="/WorkerSignin">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card workcard">
            <div className=" workcard_body">
              <img src="https://thumbs.dreamstime.com/b/online-business-programmer-flat-vector-concept-trendy-internet-entrepreneur-working-computer-office-network-web-service-172333766.jpg" width={30} alt="Workers Join" />
              <h3 className="  text-truncate workname">Admin-Only</h3>
              Management use only.
              <div className="d-block  ">
          
                <Link to="/admin">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Admin
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}