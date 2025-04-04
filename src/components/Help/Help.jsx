import React, { useState } from "react";
import DonateMoneyForm from "../DonateMoneyForm/DonateMoneyForm";
import DonateItemsForm from "../DonateItemsForm/DonateItemsForm";
import SpecialDayDonationForm from "../SpecialDayDonationForm/SpecialDayDonationForm";
import AdoptChildForm from "../AdoptChildForm/AdoptChildForm";
import "./Help.css";

const helpOptions = [
    {
      title: "Donate Money",
      description: "Support a child’s education, healthcare, and shelter through monetary donation.",
      icon: "💰",
      button: "Donate Now",
      type: "money",
    },
    {
      title: "Donate Items",
      description: "Contribute clothes, food, books, or essentials for daily living.",
      icon: "🎁",
      button: "Contribute",
      type: "items",
    },
    {
      title: "Special Day Donation",
      description: "Celebrate birthdays or festivals by donating in kind or cash.",
      icon: "🎉",
      button: "Celebrate with Us",
      type: "special",
    },
    {
      title: "Adopt a Child",
      description: "Sponsor a child monthly and help shape their future.",
      icon: "👶",
      button: "Adopt Now",
      type: "adopt",
    },
]

const Help = () => {
  const [showDonateMoneyForm, setShowDonateMoneyForm] = useState(false);
  const [showDonateItemsForm, setShowDonateItemsForm] = useState(false);
  const [showSpecialDayForm, setShowSpecialDayForm] = useState(false);
  const [showAdoptForm, setShowAdoptForm] = useState(false);

  return (
    <section className={`help-section ${showDonateMoneyForm || showDonateItemsForm || showSpecialDayForm || showAdoptForm ? "blurred" : ""}`} id="help">
      <div className="container">
        <h2 className="section-title">
          How You Can Help
          <span className="underline"></span>
        </h2>
        <div className="row">
          {helpOptions.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="help-card">
                <div className="help-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                {item.type === "money" ? (
                  <button className="help-btn" onClick={() => setShowDonateMoneyForm(true)}>{item.button}</button>
                ) : item.type === "items" ? (
                  <button className="help-btn" onClick={() => setShowDonateItemsForm(true)}>{item.button}</button>
                ) : item.type === "special" ? (
                  <button className="help-btn" onClick={() => setShowSpecialDayForm(true)}>{item.button}</button>
                ) : item.type === "adopt" ? (
                  <button className="help-btn" onClick={() => setShowAdoptForm(true)}>{item.button}</button>
                ) : (
                  <button className="help-btn">{item.button}</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDonateMoneyForm && <DonateMoneyForm onClose={() => setShowDonateMoneyForm(false)} />}
      {showDonateItemsForm && <DonateItemsForm onClose={() => setShowDonateItemsForm(false)} />}
      {showSpecialDayForm && <SpecialDayDonationForm onClose={() => setShowSpecialDayForm(false)} />}
      {showAdoptForm && <AdoptChildForm onClose={() => setShowAdoptForm(false)} />}
    </section>
  );
};

export default Help;
