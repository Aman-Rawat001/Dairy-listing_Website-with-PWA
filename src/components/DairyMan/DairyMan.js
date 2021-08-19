import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./DairyMan.css";
import skeletonImage from "../images/imageLoader.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import BookNow from "../BookNow/BookNow";
import firebase from "../../firebase";

const DairyMan = () => {
  const db = firebase.firestore();
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(false);
  const [dairyList, setDairyList] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const handleBookNow = () => {
    setOpenModel(true);
  };

  const fetchdata = async () => {
    const response = db.collection("Dairy_Details");
    const data = await response.get();
    const tempDairyList = [];
    data.docs.forEach((items) => {
      // console.log(items.data());
      const tempDairyData = {
        // id: items.id,
        dairy_name: items.data().Dairy_Name,
        dairy_address: items.data().Dairy_Address,
        dairy_code: items.data().Dairy_Code,
        milk_cost: items.data().Milk_Cost,
        redirect_link: items.data().redirect_link,
        image_url: items.data().image_url,
      };
      tempDairyList.push(tempDairyData);
      // console.log(tempDairyData);
    });
    setDairyList(tempDairyList);
    setLoading(false);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {loading ? (
        <div className="pleaseWait">Please wait loading...</div>
      ) : (
        <div className="dairyMan my-4">
          <div className="dairyCount">
            <p>{dairyList.length} Dairies in your area. Dehradun, Uttrakhand</p>
          </div>
          {openModel && <BookNow closeModal={setOpenModel} />}
          {dairyList.map((item, index) => {
            return (
              <div className="dairyDetails">
                <div className="content row">
                  <div className="col-lg-6">
                    <img
                      style={{ display: "none" }}
                      src={item.image_url}
                      alt="Image"
                      onLoad={() => setImgLoading(true)}
                    />
                    {imgLoading ? (
                      <img
                        className="dairyImg"
                        src={item.image_url}
                        alt="Image"
                      />
                    ) : (
                      <img
                        className="dairyImg"
                        src={skeletonImage}
                        alt="Loading"
                      />
                    )}
                  </div>
                  <div className="col-lg-6 contentDairy">
                    <div className="staffVaccinatedBox">
                      <div>
                        <h5 className="content1">{item.dairy_name}</h5>
                        <p className="content2">{item.dairy_address}</p>
                        <div className="mt-2">
                          <FontAwesomeIcon
                            className="ratingStars goodRating"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="ratingStars goodRating"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="ratingStars goodRating"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="ratingStars goodRating"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="ratingStars"
                            icon={faStar}
                          />
                        </div>
                        <p className="content4">
                          Cow milk, Goat milk, Butter, Ghee...
                        </p>
                        <div className="vaccinatedStaff">vaccinated Staff</div>
                      </div>
                      <div className="staffVaccinatedDose1">
                        <p>Staff vaccinated with 1st dose</p>
                      </div>
                    </div>
                    <div className="dairyCode">
                      <p className="title" style={{ color: "#4d4d4d" }}>
                        code: <span>{item.dairy_code}</span>
                      </p>
                    </div>
                    <div className="pricingAndButtons">
                      <div>
                        <p className="pricing">
                          <span className="actualCost">₹{item.milk_cost}</span>
                          <span></span>{" "}
                          <strike className="cutCost">₹1850</strike>
                        </p>
                        <p className="perMonthPerKG">per month per kilogram</p>
                      </div>
                      <div className="mobileBtns">
                        <NavLink
                          className="viewDetailsBtnMobile"
                          to={`/${item.redirect_link}`}
                          target="_blank"
                        >
                          <button className="btn viewDetailsBtn">
                            View Details
                          </button>
                        </NavLink>
                        <button
                          className="btn bookNowBtn"
                          onClick={handleBookNow}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4 mx-auto w-50" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DairyMan;
