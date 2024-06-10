import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const StaffNav = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("token");
      console.log("Logout Successfull");
      setAuthenticated(false);
      navigate("/");
    }
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <Link class="navbar-brand" href="/">
            QuickBite
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/orders">
                  Orders
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/notification">
                  {/* <IoIosNotifications /> */}
                  Notification
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/Viewuser">
                  View User
                </Link>
              </li>
              <li class="nav-item">
                <button className="btn btn-dark mx-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default StaffNav;
