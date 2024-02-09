import styles from "../Stylesheets/ModalInfoBox.css";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faAngleUp,
  faAngleDoubleUp,
  faAngleDown,
  faAngleDoubleDown,
  faPerson,
  faPlug,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

export default function ModalInfoTab({ country }) {
  const [progressWidth, setProgressWidth] = useState("");
  const [incomeClass, setIncomeClass] = useState("");

  const imageName = `url('https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`;

  let formattedPopulation = country.population.toLocaleString();

  useEffect(() => {
    const getProgressWidth = () => {
      const progressWidthCalculation = Math.round(
        (country.population / 1500000000) * 100
      );
      const progressWidth = progressWidthCalculation.toString() + "%";
      setProgressWidth(progressWidth);
    };

    getProgressWidth();
  }, [country.population]);

  useEffect(() => {
    const getIncomeClass = () => {
      const subString = country.incomeClassification.substring(0, 3);
      console.log(`This is substring: ${subString}`);
      switch (subString) {
        case "[UM":
          setIncomeClass("upperMiddle");
          break;
        case "[HI":
          setIncomeClass("highIncome");
          break;
        case "[LM":
          setIncomeClass("lowMiddle");
          break;
        case "[LI":
          setIncomeClass("lowIncome");
          break;
        default:
          setIncomeClass("");
          break;
      }
    };

    getIncomeClass();
  }, [country.incomeClass]);

  return (
    <>
      <div
        className="dataHighlightBoxLight"
        style={{ borderTopLeftRadius: "1em", borderTopRightRadius: "1em" }}
      >
        <div className="infoTabWrapper">
          <div className="infoTabContent">
            <h1>Income Classification</h1>
            <div className="incomeClassContainer">
              {incomeClass === "upperMiddle" && (
                <>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    style={{
                      fontSize: "2em",
                      marginRight: "0.5em",
                      color: "rgb(76, 192, 38)",
                    }}
                  />
                  <p>
                    Upper Middle Income Economy. Gross National Income of $4256
                    - $13205
                  </p>
                </>
              )}
              {incomeClass === "highIncome" && (
                <>
                  <FontAwesomeIcon
                    icon={faAngleDoubleUp}
                    style={{
                      fontSize: "2em",
                      marginRight: "0.5em",
                      color: "rgb(76, 192, 38)",
                    }}
                  />
                  <p>
                    High Income Economy. Gross National Income of $13205 or
                    more.
                  </p>
                </>
              )}
              {incomeClass === "lowMiddle" && (
                <>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{
                      fontSize: "2em",
                      marginRight: "0.5em",
                      color: "rgb(192, 38, 38)",
                    }}
                  />
                  <p>
                    Lower Middle Income Economy. Gross National Income of $1086
                    - $4255
                  </p>
                </>
              )}
              {incomeClass === "lowIncome" && (
                <>
                  <FontAwesomeIcon
                    icon={faAngleDoubleDown}
                    style={{
                      fontSize: "2em",
                      marginRight: "0.5em",
                      color: "rgb(192, 38, 38)",
                    }}
                  />
                  <p>
                    Low Income Economy. Gross National Income of $1085 or less.
                  </p>
                </>
              )}
              {incomeClass === "" && (
                <>
                  <p>No Recorded Data.</p>
                </>
              )}
            </div>
            <div className="gniTable">
              <div className="gniContent">
                <p>GNI Per Capita - Atlas Method</p>
                <p>${country.gniAtlas.toLocaleString()}</p>
              </div>
              <div className="gniContent">
                <p>GNI Per Capita - Purchasing Power Parity</p>
                <p>${country.gniPPP.toLocaleString()}</p>
              </div>
            </div>
            <h1>Population</h1>
            <div className="populationBarContainer">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                style={{ marginRight: "1em", color: "rgb(192, 192, 38)" }}
              />
              <div className="populationBar">
                <p>{formattedPopulation} people</p>
                <div
                  className="populationBarProgress"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>
          </div>
          <div className="infoTabMapContainer">
            <div
              className="infoTabMap"
              style={{
                backgroundImage: `${imageName}`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="dataHighlightBoxDark">
        <div className="ruralLife">
          <h1>Rural Life</h1>
          <div className="ruralContentWrapper">
            <div className="ruralLifeContentContainer">
              <div className="ruralContent">
                <FontAwesomeIcon
                  icon={faPerson}
                  style={{ fontSize: "1.5em", color: "rgb(38, 192, 192)" }}
                />
                <h4>Rural Population</h4>
                <p>100000</p>
              </div>
              <div className="ruralContent">
                <FontAwesomeIcon
                  icon={faPlug}
                  style={{ fontSize: "1.5em", color: "	rgb(192, 192, 38)" }}
                />
                <h4>Rural Electricity Access</h4>
                <p>100000</p>
              </div>
              <div className="ruralContent">
                <FontAwesomeIcon
                  icon={faWifi}
                  style={{ fontSize: "1.5em", color: "rgb(38, 192, 76)" }}
                />
                <h4>Rural Internet Connectivity</h4>
                <p>100000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="dataHighlightBoxLight"
        style={{
          borderBottomLeftRadius: "1em",
          borderBottomRightRadius: "1em",
        }}
      >
        <div className="urbanLife">
          <h1>Urban Life</h1>
          <div className="urbanContentWrapper">
            <div className="urbanLifeContentContainer">
              <div className="urbanContent">
                <FontAwesomeIcon
                  icon={faPerson}
                  style={{ fontSize: "1.5em", color: "rgb(38, 192, 192)" }}
                />
                <h4>Urban Population</h4>
                <p>100000</p>
              </div>
              <div className="urbanContent">
                <FontAwesomeIcon
                  icon={faPlug}
                  style={{ fontSize: "1.5em", color: "	rgb(192, 192, 38)" }}
                />
                <h4>Urban Electricity Access</h4>
                <p>100000</p>
              </div>
              <div className="urbanContent">
                <FontAwesomeIcon
                  icon={faWifi}
                  style={{ fontSize: "1.5em", color: "rgb(38, 192, 76)" }}
                />
                <h4>Urban Internet Connectivity</h4>
                <p>100000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
