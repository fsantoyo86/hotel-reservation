import React from 'react'
import image1 from '../images/realter2.png'
import image2 from '../images/realter3.jpg'
import image3 from "../images/realter3.png";
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

function About() {
    return (
      <div className="about">
        <Banner title="Our Team" subtitle="Working hard for you to enjoy your stay">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
        <div className="about-container">
          <div class="card">
            <img src={image1} alt="Avatar" className="about-image" />
            <div class="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          <div class="card">
            <img src={image2} alt="Avatar" className="about-image" />
            <div class="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          <div class="card">
            <img src={image3} alt="Avatar" className="about-image" />
            <div class="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About
