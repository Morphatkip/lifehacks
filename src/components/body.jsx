import React, { Component } from "react";
class Body extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Academic materials</h1>
          <p className="fs-5 col-md-8 m-30 text-md-centre">
            As a student, you’ll need to learn a lot of new information pretty
            fast or risk being clueless, and more than a bit confused. This is
            where the internet steps in, a realm of student resources with
            bountiful information about anything, where you can learn the things
            you are not taught.. In short, all the student resources you could
            ever possibly need are available online.This sites offers academic
            materials ranging from various disciplines. These academic materials
            are sample materials written by tutours.
          </p>
        </div>

        <hr className="col-3 col-md-2 mb-6" />

        <div className="row g-5 container">
          <h1 className="text-md-centre">disciplines </h1>
          <div className="col-md-6">
            <ul className="icon-list">
              <li>Business administration</li>
              <li>Computer Science</li>
              <li>phsychology</li>
              <li>electrical engineering</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="icon-list">
              <li>medicine</li>
              <li>english literature</li>
              <li></li>
              <li>other business course</li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="col-md-6">
            <h2>Sample projects</h2>
            <p></p>
            <ul className="icon-list">
              <li className="text-muted">Engineering</li>
              <li className="text-muted">computers science</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
