import React from "react";
import "./index.css";
import "./table.css";
import Block from "../../components/Block";

const HomePage: React.FC = () => {
  return (
    <Block className="homepage-container">
      <section className="user-info">
        <Block className="user-avatar"></Block>
        <Block className="user-details">
           <Block className="user-details-block">
            <Block className="user-name">
                <span className="user-personal-details">NAME</span>
                <span className="user-personal-details-birth">Age</span>
            </Block>
            <Block className="user-metadata">
                <span className="user-personal-details">SURNAME</span>
                <span className="user-personal-details-birth">Date of birth </span>
            </Block>
          </Block>
          <Block className="user-score">
            <span>Score: N/A</span>
            <button className="earn-button">Earn</button>
          </Block>
        </Block>
      </section>

      <section className="table-section">
        <Block>Personal Health</Block>
        <Block className="table-container">
          <table className="health-table">
            <thead>
              <tr className="table-header">
                <th>Personal Health</th>
                <th></th>
                <th></th>
              </tr>
              <tr className="table-header-down">
                <th>Metric</th>
                <th>State</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {[
                "BMR",
                "Physical Activity",
                "Respiratory Rate",
                "Lung Capacity",
                "Chronic Diseases",
                "BMI",
                "Cognitive Func.",
              ].map((metric, index) => (
                <tr key={index}>
                  <td>{metric}</td>
                  <td>N/A</td>
                  <td>
                    <Block className="">
                      {metric === "Lung Capacity" || metric === "Cognitive Func."
                        ? "check"
                        : "add"}
                    </Block>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Block>
      </section>
    </Block>    
  );
};

export default HomePage;
