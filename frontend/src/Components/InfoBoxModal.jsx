import { useState, useEffect } from "react";
import DoughnutComp from "./DoughnutComp";
import BarComp from "./BarComp";
import ModalInfoTab from "./ModalInfoTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faTractor,
  faStore,
  faUtensils,
  faHouse,
  faHammer,
  faTruck,
  faCartShopping,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export default function InfoBoxModal({ country, visibility, closeModal }) {
  let imageName = "";

  if (country.imageLink) {
    imageName = `url('${country.imageLink})`;
  }

  const [tabOne, setTabOne] = useState("clicked");
  const [tabTwo, setTabTwo] = useState("");
  const [tabThree, setTabThree] = useState("");
  const [tabFour, setTabFour] = useState("");
  const [tabFive, setTabFive] = useState("");
  const [bucketOne, setBucketOne] = useState();

  useEffect(() => {
    const fetchBucketOne = async () => {
      const response = await fetch(`/api/bucketone/${country.bucketOne}`);
      const json = await response.json();

      if (response.ok) {
        setBucketOne(json);
      }
    };
    fetchBucketOne();
  }, []);

  const handleChildElementClick = (e) => {
    e.stopPropagation();
  };

  const tabClicked = (tab) => {
    switch (tab) {
      case "one":
        setTabOne("clicked");
        setTabTwo("");
        setTabThree("");
        setTabFour("");
        setTabFive("");
        break;
      case "two":
        setTabOne("");
        setTabTwo("clicked");
        setTabThree("");
        setTabFour("");
        setTabFive("");
        break;
      case "three":
        setTabOne("");
        setTabTwo("");
        setTabThree("clicked");
        setTabFour("");
        setTabFive("");
        break;
      case "four":
        setTabOne("");
        setTabTwo("");
        setTabThree("");
        setTabFour("clicked");
        setTabFive("");
        break;
      case "five":
        setTabOne("");
        setTabTwo("");
        setTabThree("");
        setTabFour("");
        setTabFive("clicked");
        break;
    }
  };

  return (
    <>
      {visibility && (
        <div className="infoBoxModalWrapper" onClick={closeModal}>
          <div
            className="infoBoxModalContainer"
            onClick={(e) => handleChildElementClick(e)}
          >
            <div
              className="modalHeader"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.7) 100%), 
                  ${imageName}`,
              }}
            >
              <div className="modalTitleContainer">
                <div className="modalTitleCountryRegion">
                  <p>
                    {country.country}
                    <br />
                    {country.region}
                  </p>
                </div>
                <div className="modalTitleExitContainer">
                  <button className="exitButton" onClick={closeModal}>
                    X
                  </button>
                </div>
              </div>
              <div className="modalButtonContainer">
                <button
                  className={`modalButton ${tabOne}`}
                  onClick={() => tabClicked("one")}
                >
                  Information
                </button>
                <button
                  className={`modalButton ${tabTwo}`}
                  onClick={() => tabClicked("two")}
                >
                  Food & Agriculture
                </button>
                <button
                  className={`modalButton ${tabThree}`}
                  onClick={() => tabClicked("three")}
                >
                  Humanitarian
                </button>
                <button
                  className={`modalButton ${tabFour}`}
                  onClick={() => tabClicked("four")}
                >
                  Category
                </button>
                <button
                  className={`modalButton ${tabFive}`}
                  onClick={() => tabClicked("five")}
                >
                  Category
                </button>
              </div>
            </div>
            <div className="modalContentWrapper">
              <div className="modalContentContainer">
                <div className="modalContent">
                  {tabOne === "clicked" && (
                    <>
                      <ModalInfoTab country={country} />
                    </>
                  )}
                  {tabTwo === "clicked" && (
                    <>
                      <div className="foodAndAgrWrapper">
                        <h1>What Nutrients Is The Public Lacking?</h1>
                        <div className="fAANutrition">
                          <span>
                            <DoughnutComp />
                          </span>
                          <div className="fAANutritionFactList">
                            <div className="fAANutritionFactPositive">
                              <p className="fAANutritionFactItem">
                                🟢 Lowest deficieny is:{" "}
                              </p>
                              <p className="fAANutritionFactItem">
                                🟢 Lowest deficieny is:{" "}
                              </p>
                              <p className="fAANutritionFactItem">
                                🟢 Lowest deficieny is:{" "}
                              </p>
                            </div>
                            <div className="fAANutritionFactNegative">
                              <p className="fAANutritionFactItem">
                                🔴 Highest deficiency is:{" "}
                              </p>
                              <p className="fAANutritionFactItem">
                                🔴 Highest deficiency is:{" "}
                              </p>
                              <p className="fAANutritionFactItem">
                                🔴 Highest deficiency is:{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <h1>Irrigated vs. Rainfed Crops</h1>
                        <div className="fAACrops">
                          <div className="fAACropFacts">
                            <div className="fAACropFactItem">
                              <FontAwesomeIcon
                                icon={faCloudRain}
                                className="fAACropIcon"
                                style={{ color: "rgb(101, 206, 241)" }}
                              />
                              <p>
                                In {country.country}, the crops are primarily
                                rainfed
                              </p>
                            </div>
                            <div className="fAACropFactItem">
                              <FontAwesomeIcon
                                icon={faTractor}
                                className="fAACropIcon"
                                style={{ color: "rgb(241, 241, 101)" }}
                              />
                              <p>Most Irrigated Crop: </p>
                            </div>
                            <div className="fAACropFactItem">
                              <FontAwesomeIcon
                                icon={faCloudRain}
                                className="fAACropIcon"
                                style={{ color: "rgb(101, 206, 241)" }}
                              />
                              <p>Most Rainfed Crop: </p>
                            </div>
                          </div>
                          <span>
                            <BarComp />
                          </span>
                        </div>
                        <div className="fAAAgriculutureFacts">
                          <table>
                            <tr>
                              <td>Cultivatable Land</td>
                              <td>527,714,000.00 ha</td>
                            </tr>
                            <tr>
                              <td>Fertilizer Use Per Hectare of Land</td>
                              <td>393.22 kg</td>
                            </tr>
                            <tr>
                              <td>Agricultural Water Withdrawl</td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>Total Factor Productivity</td>
                              <td>0.97</td>
                            </tr>
                            <tr>
                              <td>
                                Public Spenditure on Agriculture (Percent of
                                GDP)
                              </td>
                              <td>527,714,000.00 ha</td>
                            </tr>
                            <tr>
                              <td>Soil Erosion</td>
                              <td>No Data Recorded</td>
                            </tr>
                          </table>
                        </div>
                        <div className="fAAWasteBreakdown">
                          <h1>Food Waste Breakdown</h1>
                          <div className="fAAWasteBreakdownInfo">
                            <div className="fAAWasteCapita">
                              <h2 style={{ marginBottom: "3em" }}>
                                Food Waste Per Capita
                              </h2>
                              <div className="fAAWasteContent">
                                <FontAwesomeIcon
                                  icon={faStore}
                                  style={{ fontSize: "2.5em", width: "2em" }}
                                />
                                <p>Retail: 15.64</p>
                              </div>
                              <div className="fAAWasteContent">
                                <FontAwesomeIcon
                                  icon={faUtensils}
                                  style={{ fontSize: "2.5em", width: "2em" }}
                                />
                                <p>Out of home consumption: 45.60</p>
                              </div>
                              <div className="fAAWasteContent">
                                <FontAwesomeIcon
                                  icon={faHouse}
                                  style={{ fontSize: "2.5em", width: "2em" }}
                                />
                                <p>Household: 63.92</p>
                              </div>
                            </div>
                            <div className="fAAWasteDistribution">
                              <h2>Food Waste Through Distribution</h2>
                              <h3>
                                Food Wasted From Moment of Production to
                                Someone's Table: 30%
                              </h3>
                              <div className="fAAWasteContent">
                                <FontAwesomeIcon
                                  icon={faHammer}
                                  style={{ fontSize: "2.5em", width: "2em" }}
                                />
                                <p>Production and Processing: 10%</p>
                              </div>
                              <div className="fAAWasteContent">
                                <FontAwesomeIcon
                                  icon={faTruck}
                                  style={{ fontSize: "2.5em", width: "2em" }}
                                />
                                <p>Transportation: 10%</p>
                              </div>
                              <div className="fAAWasteContent">
                                <FontAwesomeIcon
                                  icon={faCartShopping}
                                  style={{ fontSize: "2.5em", width: "2em" }}
                                />
                                <p>Retailers: 10%</p>
                              </div>
                              <div className="fAAWasteContent">
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                  style={{ fontSize: "2.5em", width: "2em" }}
                                />
                                <p>In House: 10%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="fAABadOutcome">
                          <h1>Bad Outcome: Malnutrition</h1>
                          <div className="fAABadOutcomeInfoWrapper">
                            <div className="fAABadOutcomeInfo">
                              <p>
                                9% of the world are severly food insecure. This
                                is 965 million people.
                              </p>
                              <p>
                                25% of the world moderately or severly food
                                insecure. This is 1.9 billion people
                              </p>
                              <p>8.9% of the world are undernourished</p>
                              <p>
                                22% of children in the world that are less than
                                5 years old are stunted.
                              </p>
                            </div>
                            <div className="fAABadOutcomeTableWrapper">
                              <table>
                                <tr>
                                  <td>Prevalence of Undernourishment</td>
                                  <td>3.00%</td>
                                </tr>
                                <tr>
                                  <td>Prevalence of Stunting</td>
                                  <td>4.70%</td>
                                </tr>
                                <tr>
                                  <td>Prevalence of Wasting</td>
                                  <td>1.90%</td>
                                </tr>
                                <tr>
                                  <td>Underweight</td>
                                  <td>2.30%</td>
                                </tr>
                                <tr>
                                  <td>Severe Food Insecurity</td>
                                  <td>5.40%</td>
                                </tr>
                                <tr>
                                  <td>Micro and Macro Nutrient Deficiency</td>
                                  <td>8.40%</td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {tabThree === "clicked" && <div>You're in tab three.</div>}
                  {tabFour === "clicked" && <div>You're in tab four.</div>}
                  {tabFive === "clicked" && <div>You're in tab five.</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
