import React from "react";
import "./DonateMoneyForm.css"

const DonateMoneyForm = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Donate Money</h2>
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <input type="tel" placeholder="Enter your phone number" />
                <input type="number" placeholder="Enter amount" />
                <textarea placeholder="Any message (optional)"></textarea>
                <button className="donate-btn">Donate</button>
                <button className="close-btn" onClick={onClose}>×</button>
            </div>
        </div>
    );
};

export default DonateMoneyForm;
