import React from 'react';
import './About.css';
import aboutImg from '../../assets/images/about.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
    <div className="container">

        {/* Title block */}
        <h2 className="section-title">
        Who We Are
        <span className="underline"></span>
        </h2>

        {/* Content block */}
        <div className="row align-items-center flex-column-reverse flex-md-row mt-5">
        <div className="col-md-5">
            <img src={aboutImg} alt="About Us" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
            <p>
            CharityCare is a children-focused non-profit organization based in Chennai, India.
            Since 2017, we’ve supported over <strong>1,500 underprivileged children</strong> with shelter, education, and emotional care.
            </p>
            <p>
            Our core values are empathy, empowerment, and equal opportunity.
            We work with <strong>120+ volunteers</strong> and run 4 core programs on child welfare and growth.
            </p>
            <ul className="about-stats">
            <li><strong>📍 Location:</strong> Chennai, India</li>
            <li><strong>🎓 Children Helped:</strong> 1,500+</li>
            <li><strong>👥 Volunteers:</strong> 120+</li>
            <li><strong>🎯 Programs:</strong> Education, Nutrition, Shelter, Wellbeing</li>
            </ul>
        </div>

        
        </div>
    </div>
    </section>

  );
};

export default About;
