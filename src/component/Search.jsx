import React from "react";
import { purpleColor } from "./index";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { allRoomData } from "../house";
import Body from "./Body";
const Search = () => {
  let filteredArray = [];

  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
    let result = allRoomData.forEach((obj) => {
      const valueArray = Object.values(obj);
      const isAvailable = valueArray.find(
        (ele) =>
          ele?.toString().toLowerCase() === value?.toString().toLowerCase()
      );
      console.log(isAvailable);
      if (isAvailable) {
        filteredArray.push(obj);
      }
    });
  };

  const handleSearch = (e) => {
     return (
      filteredArray ? localStorage.setItem("data", JSON.stringify(filteredArray)) : null
    );
  };
  return (
    <div>
      <nav className="navbar py-5">
        <div className="container-fluid">
          <h1>Search properties on rent</h1>
          <div className="border border-dark rounded">
            <form className="d-flex align-items-center" role="search">
              <input
                className="form-control me-2 border border-0"
                type="search"
                placeholder="Search"
                onChange={handleChange}
              />
              <ExpandCircleDownIcon
                style={{
                  backgroundColor: "#FAFAFE",
                  color: purpleColor,
                  cursor: "pointer",
                }}
                onClick={handleSearch}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Search;
