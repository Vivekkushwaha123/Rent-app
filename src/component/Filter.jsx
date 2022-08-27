import React, { useState, useEffect } from "react";
import { purpleColor } from ".";
import { allRoomData } from "../house";
import { priceRange } from "../house";
import Body from "./Body";

const Filter = () => {
  const [filter, setFilterData] = useState({});

  const handleChange = (e) => {
    setFilterData((prevState) => ({
      ...prevState,
      [e.target.name]: e?.target?.value,
    }));
  };

  const allTypeHouse = [
    ...new Set(
      allRoomData.map((currElem) => {
        return currElem.type;
      })
    ),
  ];

  const allLocation = [
    ...new Set(
      allRoomData.map((currElem) => {
        return currElem.country;
      })
    ),
  ];

  const HouseTypeDropDown = () => {
    return (
      <div>
        <select
          style={{ width: "100%" }}
          className="border-0"
          name="type"
          value={filter.type}
          onChange={handleChange}
        >
          {allTypeHouse?.map((house, index) => {
            return (
              <option
                value={house}
                key={index}
                style={{ width: "100%" }}
                className="border-0"
              >
                {house}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  const LocationDropDown = () => {
    return (
      <div>
        <select
          style={{ width: "100%" }}
          className="border-0"
          name="country"
          onChange={handleChange}
          value={filter.country}
        >
          {allLocation?.map((location, index) => {
            return (
              <option
                value={location}
                key={index}
                style={{ width: "100%" }}
                className="border-0"
              >
                {location}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  const PriceRangeDropDown = () => {
    return (
      <div>
        <select
          className="border-0"
          name="price"
          value={filter.price}
          onChange={handleChange}
        >
          {priceRange?.map((price, index) => {
            return (
              <option className="border-0" value={price} key={price + index}>
                {price}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = allRoomData.find((obj) => {
      return obj.type === filter.type && obj.country === filter.country;
    });

   
    return filteredData ? <Body props={filteredData} /> : null;
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }} className="p-1 mb-4">
      <div className="row rounded">
        <div className="col-2 px-3 border border-bottom-0 border-top-0 border-start-0">
          <p className="p-0 m-0" style={{ color: "grey" }}>
            Location
          </p>
          <LocationDropDown />
        </div>
        <div className="col-3 px-3 border border-top-0 border-bottom-0 border-end-0">
          <p className="p-0 m-0" style={{ color: "grey" }}>
            When
          </p>
          <input
            type="date"
            placeholder="Select Move In Date"
            className="border-0"
            id=""
            name="date"
            onChange={handleChange}
          />
        </div>
        <div className="col-3 px-3 border border-bottom-0 border-top-0 border-end-0">
          <p className="p-0 m-0" style={{ color: "grey" }}>
            Price
          </p>
          <PriceRangeDropDown />
        </div>

        <div className="col-2 px-3 border border-top-0 border-bottom-0 border-end-0">
          <p className="p-0 m-0" style={{ color: "grey" }}>
            Property Type
          </p>
          <HouseTypeDropDown />
        </div>
        <div className="col-2 border px-3 border-top-0 border-bottom-0 border-end-0 d-flex align-items-center">
          <button
            className="border-0 p-2 px-4 rounded "
            style={{ backgroundColor: purpleColor, color: "white" }}
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
