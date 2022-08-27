import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { purpleColor } from "./index";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-light"
        style={{ backgroundColor: "#FAFAFE" }}
      >
        <div className="container-fluid ">
          <HomeRoundedIcon style={{ color: purpleColor }} />
          <NavLink className="navbar-brand" to="#">
            Estatery
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNavDropdown"
          >
            <div className="link">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="#"
                  >
                    Rent
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Buy
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Sell
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Manage property
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        Action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        Another action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        Something else here
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resource
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" to="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        Another action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        Something else here
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="button">
              <button
                className="m-2 p-1 px-2 rounded"
                style={{
                  backgroundColor: purpleColor,
                  color: "white",
                  border: "none",
                }}
              >
                Sign Up
              </button>
              <button
                className="m-2 p-1 px-2 rounded"
                style={{ color: purpleColor, borderColor: purpleColor }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
