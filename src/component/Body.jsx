import React, { useEffect } from "react";
import Card from "./Card";
import { allRoomData } from "./../house";

const Body = () => {
  const filteredData = JSON.parse(localStorage.getItem('data'))
  console.log(filteredData)
 
  const roomData = filteredData ? filteredData : allRoomData;
  console.log(roomData);
  return (
    <div className="row d-flex ">
      {roomData?.map((details, index) => {
        return <Card props={details} key={index} />;
      })}
    </div>
  );
};

export default Body;
