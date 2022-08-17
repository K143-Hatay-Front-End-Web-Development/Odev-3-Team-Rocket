import React from "react";

import { Link } from "react-router-dom";

import { result, returnBtn, problems } from "../../assets/svgs";

import "./ResultPage.css";

const ResultPage = () => {
  return (
    <section className="container result-wrapper">
      <div className="stats-section">
        {result}
        <p>Puan:</p>
        <p>Dogru Cevap:</p>
        <p>Yanlıs Cevap:</p>
        <button className="btn large-btn">
          <Link className="btn large-btn" to="/">
            {returnBtn}
          </Link>
        </button>
      </div>
      <div className="problems">
        {problems}
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
        <p>5 x 7 = 35</p>
      </div>
    </section>
  );
};

export default ResultPage;
