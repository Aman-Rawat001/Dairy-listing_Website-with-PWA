import React from "react";
import "./HomePage.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import DairyMan from "./DairyMan/DairyMan";
import DairyInformation from "./DairyInformation/DairyInformation";

const HomePage = () => {
  return (
    <>
      <div className="HomePage ">
        <Navbar />
        <div className="noteHeader text-center">
          <p>
            Please attention, if you have any queries contact us on 9058153667,
            7078810568, 6397574632.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="leftContent col-lg-9">
              <DairyMan />
            </div>
            <div className="rightContent col-lg-3 my-4">
              <DairyInformation />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
