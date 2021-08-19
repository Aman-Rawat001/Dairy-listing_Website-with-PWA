import React from "react";

import "./DairyInformation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";

const DairyInformation = () => {
  return (
    <>
      <div className="dairyInfo">
        <div className="filters">
          <h2>Filters</h2>
          <p className="py-1" style={{ fontWeight: "500", color: "#585858" }}>
            popular locations in dehradun, Uttrakhand
          </p>
          <div className="locationTags">
            <p className="tags mx-1 px-2 my-1">
              <small>Sainik Colony</small>
            </p>
            <p className="tags mx-1 px-2 my-1">
              <small>Vivek Vihar</small>
            </p>
            <p className="tags mx-1 px-2 my-1">
              <small>Girdhar Vihar</small>
            </p>
            <p className="tags mx-1 px-2 my-1">
              <small>Sainik Colony</small>
            </p>
            <p className="tags mx-1 px-2 my-1">
              <small>Sainik Colony</small>
            </p>
          </div>
          <div className="sanitizerNote mt-5">
            <p className="titleNote py-2 px-3">Note</p>
            <p className="notePara px-3 pb-3 pt-1">
              If you have any questions, feel free to contact us on our given
              number.
              <p>1. Found anything wrong about our product.</p>
              <p>2. Want to switch your diary.</p>
              <p>3. Want to register as a customer.</p>
              <p>4. Want to become our partner.</p>
              <p>5. Want to learn more about us.</p>
              <p>6. Want to work with us.</p>
            </p>
          </div>
          <div className="ourCollection my-5">
            <p className="content1 pb-2">Our Collections</p>
            <div className="collectionBox">
              <FontAwesomeIcon icon={faCheckCircle} />

              <p className="content2 py-1 ms-2">Pure form of Cow Milk</p>
            </div>
            <div className="collectionBox">
              <FontAwesomeIcon icon={faCheckCircle} />
              <p className="content2 py-1 ms-2">
                Butter. Butter and butter blends.
              </p>
            </div>
            <div className="collectionBox">
              <FontAwesomeIcon icon={faCheckCircle} />
              <p className="content2 py-1 ms-2">
                Cheese. Natural and processed cheese.
              </p>
            </div>
            <div className="collectionBox">
              <FontAwesomeIcon icon={faCheckCircle} />
              <p className="content2 py-1 ms-2">Frozen Desserts.</p>
            </div>
            <div className="collectionBox">
              <FontAwesomeIcon icon={faCheckCircle} />
              <p className="content2 py-1 ms-2">Whey, Milk Powder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DairyInformation;
