import React from "react";
import "./AdoptChildForm.css";

const AdoptChildForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Adopt a Child</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <input type="tel" placeholder="Enter your contact number" required />
          </div>

          <div className="form-group">
            <select required>
              <option value="">Select Age Group</option>
              <option value="0-2">0 - 2 Years</option>
              <option value="3-5">3 - 5 Years</option>
              <option value="6-10">6 - 10 Years</option>
              <option value="11+">11+ Years</option>
            </select>
          </div>

          <div className="form-group">
            <input type="number" placeholder="Enter amount in INR" required />
          </div>

          <div className="form-group">
            <textarea placeholder="Any special message(optional)"></textarea>
          </div>

          <button className="donate-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdoptChildForm;
