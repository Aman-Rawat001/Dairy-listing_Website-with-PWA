import React, { useState } from "react";
import "./BookNow.css";
import firebase from "../../firebase";

const BookNow = ({ closeModal }) => {
  const db = firebase.firestore();
  const [bookNow, setBookNow] = useState({
    name: "",
    phone: "",
    currentCode: "",
    newCode: "",
    message: "",
  });
  let name, value;
  const handleBookNowChange = (e) => {
    value = e.target.value;
    name = e.target.name;
    setBookNow({ ...bookNow, [name]: value });
    // console.log(name);
  };
  const submitDetails = (e) => {
    e.preventDefault();
    if (
      !bookNow.name ||
      !bookNow.phone ||
      !bookNow.currentCode ||
      !bookNow.newCode
    ) {
      alert("Please fill all the information");
    } else {
      db.collection("Change_Dairy_Queries")
        .add({
          name: bookNow.name,
          phone: bookNow.phone,
          currentDairyCode: bookNow.currentCode,
          newDairyCode: bookNow.newCode,
          message: bookNow.message,
        })
        .then(() => {
          alert("Your Query has been successfully uploaded");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="modalBg">
        <div className="bookNowMain">
          <div className="closeModalDiv">
            <button onClick={() => closeModal(false)} className="closeModalBtn">
              X
            </button>
          </div>
          <form>
            <div className="form-group mt-3">
              <label className="font500">Your Name</label>
              <input
                onChange={handleBookNowChange}
                name="name"
                value={bookNow.name}
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group mt-3">
              <label className="font500">Your Phone</label>
              <input
                onChange={handleBookNowChange}
                name="phone"
                value={bookNow.phone}
                type="tel"
                className="form-control"
                placeholder="Your Phone"
              />
            </div>
            <div className="switchDairyCode">
              <div className="form-group mt-3">
                <label className="font500">Dairy Code</label>
                <input
                  onChange={handleBookNowChange}
                  value={bookNow.currentCode}
                  name="currentCode"
                  type="tel"
                  className="form-control"
                  placeholder="Current Code"
                />
              </div>
              <div className="form-group mt-3">
                <label className="font500">New Dairy Code</label>
                <input
                  onChange={handleBookNowChange}
                  value={bookNow.newCode}
                  name="newCode"
                  type="tel"
                  className="form-control"
                  placeholder="New Code"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <label className="mb-1 font500">
                Why you want to switch your dairy?
              </label>
              <textarea
                placeholder="Message"
                onChange={handleBookNowChange}
                name="message"
                value={bookNow.message}
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <br />
            <button className="btn submitBtn" onClick={submitDetails}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookNow;
