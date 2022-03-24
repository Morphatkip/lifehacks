import React, { Component } from "react";
import Top from "./bodytop";
import Business from "./subjects/Business";
import Computer from "./subjects/ComputerScience";
import Criminology from "./subjects/criminology";
import Education from "./subjects/Education";
import HealthSciences from "./subjects/HealthSciences";
import Others from "./subjects/Others";
import Phsychology from "./subjects/Phsychology";
import Physics from "./subjects/Physics";
import PoliticalScience from "./subjects/PoliticalScience";
import Sports from "./subjects/Sports.js";
import Form from "./Form";
class Body extends Component {
  render() {
    return (
      <div className="bg-dark ">
        <Top />
        <div
          className="container text-light pt-5"
          style={{ backgroundColor: "olivedrab" }}
        >
          {" "}
          <div className="row g-5 ">
            <h1 className="text-md-centre">Disciplines </h1>
            <p className="fs-5 col-md-8 m-30 text-md-centre">
              There are various disciplines in higher education. These
              categories are mentioned as listed below.
            </p>
            <div className="col-md-6">
              <ul className="icon-list">
                <li>Business administration</li>
                <li>Computer Science</li>
                <li>Phsychology</li>
                <li>Electrical engineering</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="icon-list">
                <li>Medicine</li>
                <li>English literature</li>
                <li>Other business course</li>
              </ul>
            </div>

            <p className="fs-5 col-md-8 m-30 text-md-centre">
              The examples of essays on the above discplines on various topics
              are given below.
            </p>
          </div>
        </div>
        <hr />
        <Business />
        <Computer />
        <Criminology />
        <Education />
        <HealthSciences />
        <Phsychology />
        <Physics />
        <PoliticalScience />
        <Sports />
        <Others />
        <Form />
        <div className="container pt-4"></div>
        <div className="container pt-4"></div>
        <hr />
      </div>
    );
  }
}

export default Body;
