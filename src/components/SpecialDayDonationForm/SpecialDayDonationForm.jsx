import React from "react";
import "./SpecialDayDonationForm.css";

const SpecialDayDonationForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Special Day Donation</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <input type="tel" placeholder="Enter your contact number" required />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Name of the special day" required />
          </div>

          <div className="form-group">
            <input type="date" required />
          </div>

          <div className="form-group">
            <input type="number" placeholder="Enter amount in INR" required />
          </div>

          <div className="form-group">
            <textarea placeholder="Any special message"></textarea>
          </div>

          <button className="donate-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SpecialDayDonationForm;
