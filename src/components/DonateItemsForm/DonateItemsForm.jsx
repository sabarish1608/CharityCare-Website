import React from "react";
import "./DonateItemsForm.css";

const DonateItemsForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Donate Items</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <input type="tel" placeholder="Enter your contact number" required />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Name of the item" required />
          </div>

          <div className="form-group">
            <input type="number" placeholder="Enter quantity" required />
          </div>

          <div className="form-group">
            <textarea placeholder="Any additional details"></textarea>
          </div>

          <button className="donate-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DonateItemsForm;
