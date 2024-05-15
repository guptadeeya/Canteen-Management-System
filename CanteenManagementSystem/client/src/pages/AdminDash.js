import React, { useState } from "react";
import "./AdminDash.css";
import AddFood from "./AddFood";
import DisplayFood from "./Item/DisplayFood";
import DisplayUser from "./User/DisplayUser";
import Orders from "./Orders/Orders";

const AdminDash = () => {
  const [categoryData, setCategoryData] = useState("addFood");

  const handleClick = (category) => {
    setCategoryData(category);
  };
  return (
    <>
      <div className="container-fluid" id="main">
        <div className="row">
          <div className="col-md-2 align-item-center">
            <ul class="list-group">
              <li
                style={{ cursor: "pointer" }}
                class="list-group-item"
                onClick={() => handleClick("addFood")}
              >
                Add Food
              </li>
              <li
                style={{ cursor: "pointer" }}
                class="list-group-item"
                onClick={() => handleClick("displayFood")}
              >
                Display Food
              </li>
              <li
                style={{ cursor: "pointer" }}
                class="list-group-item"
                onClick={() => handleClick("displayUser")}
              >
                User
              </li>
              <li
                style={{ cursor: "pointer" }}
                class="list-group-item"
                onClick={() => handleClick("orders")}
              >
                Orders
              </li>
            </ul>
          </div>
          <div className="col-md-10">
            {categoryData === "addFood" && <AddFood />}
            {categoryData === "displayFood" && <DisplayFood />}
            {categoryData === "displayUser" && <DisplayUser />}
            {categoryData === "orders" && <Orders />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDash;
