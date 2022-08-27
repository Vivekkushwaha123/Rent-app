import React from "react";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import Crop54Icon from "@mui/icons-material/Crop54";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { purpleColor } from "./index";
const Card = (roomDetails) => {
  const {  price, detail, image, name, tag } = roomDetails.props;
  return (
    <div className="col-4 my-2 ">
      <div className="card d-flex">
        <img
          src={image}
          className="card-img-top"
          style={{ objectFit: "contain" }}
        />
        <div
          className="tag p-1 rounded"
          style={{
            backgroundColor: purpleColor,
            width: "33%",
            marginTop: "-20px",
            marginLeft: "-15px",
            color: "white",
          }}
        >
          <AutoAwesomeIcon fontSize="string" style={{ color: "white" }} />
          {tag}
        </div>
        <div className="card-body d-flex align-items-start flex-column p-1 px-3">
          <div
            className="d-flex justify-content-between"
            style={{ width: "100%" }}
          >
            <span className="card-title">
              <span
                style={{
                  color: purpleColor,
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                ${price}
              </span>
              /month
            </span>
            <span
              className="border p-1"
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                cursor: "pointer",
                color: purpleColor,
              }}
            >
              <FavoriteBorderIcon fontSize="medium" />
            </span>
          </div>

          <h5 className="card-title" style={{ fontWeight: "700" }}>
            {name}
          </h5>

          <p className="card-text" style={{ color: "gray" }}>
            {detail.address}
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <hr
            className="p-0 m-0"
            style={{
              width: "90%",
            }}
          />
        </div>
        <div className="row p-2 ">
          <span
            className="col-4 p-0 d-flex justify-content-center"
            style={{ fontSize: "22px" }}
          >
            <span>
              <SingleBedIcon fontSize="string" style={{ color: purpleColor }} />
            </span>
            {detail.bed} beds
          </span>
          <span
            className="col-4 p-0 d-flex justify-content-center"
            style={{ fontSize: "22px" }}
          >
            <span>
              <BathtubIcon fontSize="string" style={{ color: purpleColor }} />
            </span>
            {detail.bathroom}Bathrooms
          </span>
          <span
            className="col-4 p-0 d-flex justify-content-center"
            style={{ fontSize: "22px" }}
          >
            <span>
              <Crop54Icon fontSize="string" style={{ color: purpleColor }} />
            </span>
            {detail.area}m2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
