import React from 'react';
import './Help.css';

const helpOptions = [
  {
    title: 'Donate Money',
    description: 'Support a child’s education, healthcare, and shelter through monetary donation.',
    icon: '💰',
    button: 'Donate Now',
    link: '#donate',
  },
  {
    title: 'Donate Items',
    description: 'Contribute clothes, food, books, or essentials for daily living.',
    icon: '🎁',
    button: 'Contribute',
    link: '#donate',
  },
  {
    title: 'Special Day Donation',
    description: 'Celebrate birthdays or festivals by donating in kind or cash.',
    icon: '🎉',
    button: 'Celebrate with Us',
    link: '#donate',
  },
  {
    title: 'Adopt a Child',
    description: 'Sponsor a child monthly and help shape their future.',
    icon: '👶',
    button: 'Adopt Now',
    link: '#adopt',
  },
];

const Help = () => {
  return (
    <section className="help-section" id="help">
      <div className="container">
        <h2 className="section-title">How You Can Help
        <span className="underline"></span>
        </h2>
        <div className="row">
          {helpOptions.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="help-card">
                <div className="help-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a href={item.link} className="help-btn">
                  {item.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;
