import React from "react";
import "../BookingAppointment/BookingAppointment.css";
import img1 from "../../assets/qcard3.jpg";

const BookAppointment = () => {
  return (
    <div className="book-appointment-container">
      <div className="form-section">
        <h1>Book Appointment</h1>
        <p>
          Enter your details and the subject that you want to contact the lawyer
        </p>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter name" />
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
          <label>Mobile</label>
          <input type="tel" placeholder="Enter phone number" />
          <label>Subject</label>
          <input type="text" placeholder="Subject of legal case" />
          <label>Description</label>
          <textarea placeholder="Briefly describe your situation"></textarea>
          <div className="button-container">
            <button type="submit">Submit</button>
            <button type="button" className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="image-section">
        <img src={img1} alt="Scheduling" />
        <div className="image-text">
          Easily schedule appointments online from home or on the go
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
