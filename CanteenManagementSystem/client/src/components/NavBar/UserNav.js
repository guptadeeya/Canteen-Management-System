import React, { useState, useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Search from "../../Search/Search";
import { useSelector } from "react-redux";
import AuthContext from "../../context/AuthContext";

const UserNav = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const cartItem = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = { searchItem };
    const url = "http://localhost:4000/api/hawa/search";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(name),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (response.ok) {
      setSearchResult(json);
      console.log(json);
      navigate("/searchFood");
    }
  };

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
      <div>
        {/* <div className="container">
          <div className="row">
            <div className="col-md-2" id="logo">
              <h1>QuickBite</h1>
            </div>
            <div className="col-md-10">
              <ul id="list">
                <li>
                  <NavLink to="/">
                    <AiFillHome />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/displayCart">
                    <AiOutlineShoppingCart />
                    {cartItem.length}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/userNotification">
                    <IoIosNotifications />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/userTransaction">
                    <FaHistory />
                  </NavLink>
                </li>

                <li>
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="search"
                        onChange={(e) => setSearchItem(e.target.value)}
                        value={searchItem}
                      />
                      <button className="btn btn-primary ">
                        <AiOutlineSearch />
                      </button>
                    </div>
                  </form>
                </li>
                <button className="btn btn-dark mx-2" onClick={handleLogout}>
                  Logout
                </button>
              </ul>
            </div>
          </div>
        </div> */}

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
              <form class="d-flex" role="search">
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
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/displayCart">
                    Cart - {cartItem.length}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/userNotification">
                    Notifications
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/userTransaction">
                    History
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/about">
                    About
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
      </div>

      <main>
        <Outlet />
        {location.pathname === "/searchFood" && (
          <Search searchResult={searchResult} />
        )}
      </main>
    </>
  );
};
export default UserNav;
