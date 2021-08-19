import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewDetails.css";
import loaderImage from "../images/imageLoader.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import Skeleton from "react-loading-skeleton";
import firebase from "../../firebase";

const ViewDetails = () => {
  const [imgLoader, setImgLoader] = useState(false);
  const [dairyObject, setDairyObject] = useState({
    dairy_name: "",
    dairy_address: "",
    dairy_code: "",
    owner_name: "",
    contact_num: "",
  });
  const db = firebase.firestore();
  const response = db.collection("Dairy_Details");
  const url = useParams();
  // console.log(url.viewDetails);

  const fetchDairyDetails = async () => {
    const filter = await response.where("redirect_link", "==", url.viewDetails);
    const data = await filter.get();
    data.docs.forEach((item) => {
      // console.log(item.data());
      const tempObj = {
        dairy_name: item.data().Dairy_Name,
        dairy_address: item.data().Dairy_Address,
        dairy_code: item.data().Dairy_Code,
        owner_name: item.data().owner_name,
        contact_num: item.data().contact_num,
        image_url: item.data().image_url,
      };
      setDairyObject(tempObj);
    });
  };
  useEffect(() => {
    fetchDairyDetails();
  }, []);
  return (
    <>
      <div className="viewDetails">
        <div className="container">
          <div className="details">
            <div className="text-center mt-3">
              <p className="detailsTitle">
                {dairyObject.dairy_name || <Skeleton />}
              </p>
              <small className="content2">
                {dairyObject.dairy_address || <Skeleton />}
              </small>
            </div>
            <div className="content3Box row mt-5">
              <div className="col-lg-6 leftDetailsBox">
                <div>
                  <div className="leftBoxDetails mt-2">
                    <p className="detailsPara">
                      Owner Name:{" "}
                      <span className="detailsSpan">
                        {dairyObject.owner_name || <Skeleton />}
                      </span>
                    </p>
                    <p className="detailsPara mt-2">
                      Dairy Code:{" "}
                      <span className="detailsSpan">
                        {dairyObject.dairy_code || <Skeleton />}
                      </span>
                    </p>
                    <p className="detailsPara mt-2">
                      Full Address:{" "}
                      <span className="detailsSpan">
                        {dairyObject.dairy_address || <Skeleton />}
                      </span>
                    </p>
                    <p className="detailsPara mt-2">
                      Contact Number:{" "}
                      <span className="detailsSpan">
                        {dairyObject.contact_num || <Skeleton />}
                      </span>
                    </p>
                  </div>
                  <div className="varieties">
                    <p className="detailsPara mt-2">Varieties Available:</p>
                    <div className="varitiesAvailable">
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <p className="ms-2 my-2">
                        Butter. Butter and butter blends.
                      </p>
                    </div>
                    <div className="varitiesAvailable">
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <p className="ms-2 my-1">
                        Cheese. Natural and processed cheese products.
                      </p>
                    </div>
                    <div className="varitiesAvailable">
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <p className="ms-2 my-1">
                        Cultured Dairy. Yogurt, cottage cheese, sour cream,
                        dips.
                      </p>
                    </div>
                    <div className="varitiesAvailable">
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <p className="ms-2 my-1">Frozen Desserts. </p>
                    </div>
                    <div className="varitiesAvailable">
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <p className="ms-2 my-1">Non-Dairy Beverages.</p>
                    </div>
                  </div>
                  <div className="detailsRating my-2">
                    <div>
                      <p>Ratings: 4/5</p>
                    </div>
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
                    <FontAwesomeIcon className="ratingStars" icon={faStar} />
                  </div>
                </div>
                <div className="vaccinatedWithDose">
                  <p className="vaccinatedWithDosePara">
                    All Staff Vaccinated with 1st dose
                  </p>
                </div>
              </div>
              <div className="detailsImage col-lg-6 mb-3">
                <img
                  style={{ display: "none" }}
                  src={dairyObject.image_url}
                  alt="Dairy_Image"
                  onLoad={() => setImgLoader(true)}
                />
                {imgLoader ? (
                  <img src={dairyObject.image_url} alt="Dairy_Image" />
                ) : (
                  <img src={loaderImage} alt="loader" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
