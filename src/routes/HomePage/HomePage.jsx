import { useState } from "react";
import { Link } from "react-router-dom";
import { header, startBtn, tick } from "../../assets/svgs";
import "./HomePage.css";
import MainStats from "../../components/MainStats/MainStats";
import OperatorButton from "../../components/OperatorButtons/OperatorButton";

const operators = ["Toplama", "Çıkarma", "Çarpma", "Bölme"];

const HomePage = () => {
  const [operator, setOperator] = useState(null);

  return (
    <div className="container home-wrapper">
      <header>{header}</header>
      <section className="home">
        <MainStats />
        <div>
          {operators.map((opr, index) => {
            return (
              <OperatorButton
                key={index}
                text={opr}
                operator={operator}
                setOperator={setOperator}
              />
            );
          })}
        </div>
      </section>
      <Link
        onClick={() =>
          operator === null && alert("Lütfen dört işlemden birini seçiniz.")
        }
        className="btn large-btn"
        to={operator !== null ? "/game" : "#"}
      >
        {startBtn}
      </Link>
    </div>
  );
};

export default HomePage;
