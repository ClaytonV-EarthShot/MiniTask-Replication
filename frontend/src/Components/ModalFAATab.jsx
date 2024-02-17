import styles from "../Stylesheets/ModalFAA.css";

import DoughnutComp from "./DoughnutComp";
import BarComp from "./BarComp";
import ProblemStatementButton from "./ProblemStatementButton";

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
  faCookieBite,
  faEgg,
  faCow,
  faSeedling,
  faPizzaSlice,
  faPersonRunning,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function ModalFAATab({ country, bucketOne }) {
  return (
    <>
      <div
        className="dataHighlightBoxLight"
        style={{ borderTopLeftRadius: "1em", borderTopRightRadius: "1em" }}
      >
        <div className="nutrition">
          <h1>Is the food adequately nutritious for the body?</h1>
          <div className="nutritionStats">
            <span>
              <DoughnutComp />
            </span>
            <div className="nutritionFactList">
              <div className="nutritionFactPositive">
                <p className="nutritionFactItem">🟢 Lowest deficieny is: </p>
                <p className="nutritionFactItem">🟢 Lowest deficieny is: </p>
                <p className="nutritionFactItem">🟢 Lowest deficieny is: </p>
              </div>
              <div className="nutritionFactNegative">
                <p className="nutritionFactItem">🔴 Highest deficiency is: </p>
                <p className="nutritionFactItem">🔴 Highest deficiency is: </p>
                <p className="nutritionFactItem">🔴 Highest deficiency is: </p>
              </div>
            </div>
          </div>
        </div>
        <ProblemStatementButton shade="light" />
      </div>

      <div className="dataHighlightBoxDark">
        <h1>Is There Physical, Geographic, and Economic Access to the Food?</h1>
        <h2>Irrigated vs. Rainfed Crops</h2>
        <div className="crops">
          <div className="cropFacts">
            <div className="cropFactItem">
              <FontAwesomeIcon
                icon={faCloudRain}
                className="cropIcon"
                style={{ color: "rgb(101, 206, 241)" }}
              />
              <p>In {country.country}, the crops are primarily rainfed</p>
            </div>
            <div className="cropFactItem">
              <FontAwesomeIcon
                icon={faTractor}
                className="cropIcon"
                style={{ color: "rgb(241, 241, 101)" }}
              />
              <p>Most Irrigated Crop: </p>
            </div>
            <div className="cropFactItem">
              <FontAwesomeIcon
                icon={faCloudRain}
                className="cropIcon"
                style={{ color: "rgb(101, 206, 241)" }}
              />
              <p>Most Rainfed Crop: </p>
            </div>
          </div>
          <span>
            <BarComp />
          </span>
        </div>
        <div className="agriculutureFactsWrapper">
          <div className="agriculutureFacts">
            <table>
              <tbody>
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
                  <td>Public Spenditure on Agriculture (Percent of GDP)</td>
                  <td>527,714,000.00 ha</td>
                </tr>
                <tr>
                  <td>Soil Erosion</td>
                  <td>No Data Recorded</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <ProblemStatementButton shade="dark" />
      </div>

      <div className="dataHighlightBoxLight">
        <h1>Food Supply Breakdown</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faCookieBite}
                  style={{
                    fontSize: "2em",
                    width: "2em",
                  }}
                />
                Caloric Supply Per Capita
              </td>
              <td>{bucketOne.caloricSupplyPerCapita}</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faEgg}
                  style={{
                    fontSize: "2em",
                    width: "2em",
                  }}
                />
                Protein Supply Per Capita
              </td>
              <td>{bucketOne.proteinSupplyPerCapita}</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faCow}
                  style={{
                    fontSize: "2em",
                    width: "2em",
                  }}
                />
                Supply From Animal-Based Foods
              </td>
              <td>{bucketOne.supplyFromAnimalBasedFood}</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faSeedling}
                  style={{
                    fontSize: "2em",
                    width: "2em",
                  }}
                />
                Supply From Plant-Based Foods
              </td>
              <td>{bucketOne.supplyFromPlantBasedFood}</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faPizzaSlice}
                  style={{
                    fontSize: "2em",
                    width: "2em",
                  }}
                />
                Fat Supply Per Capita
              </td>
              <td>{bucketOne.fatSupplyPerCapita}</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faPersonRunning}
                  style={{
                    fontSize: "2em",
                    width: "2em",
                  }}
                />
                Dietary Energy Supply Adequacy
              </td>
              <td>{bucketOne.dietaryEnergySupplyAdequacy}</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon
                  icon={faBolt}
                  style={{
                    fontSize: "2em",
                    width: "2em",
                  }}
                />
                Minimum Dietary Energy Requirement
              </td>
              <td>{bucketOne.minimumDietaryEnergyRequirement}</td>
            </tr>
          </tbody>
        </table>
        <ProblemStatementButton shade="light" />
      </div>

      <div className="dataHighlightBoxDark">
        <h1>Once Food is Produced, What Percent is Getting to the People?</h1>
        <div className="wasteBreakdownInfo">
          <div className="wasteCapita">
            <h2 style={{ marginBottom: "3em" }}>Food Waste Per Capita</h2>
            <div className="wasteContent">
              <FontAwesomeIcon
                icon={faStore}
                style={{ fontSize: "2.5em", width: "2em" }}
              />
              <p>Retail: 15.64</p>
            </div>
            <div className="wasteContent">
              <FontAwesomeIcon
                icon={faUtensils}
                style={{ fontSize: "2.5em", width: "2em" }}
              />
              <p>Out of home consumption: 45.60</p>
            </div>
            <div className="wasteContent">
              <FontAwesomeIcon
                icon={faHouse}
                style={{ fontSize: "2.5em", width: "2em" }}
              />
              <p>Household: 63.92</p>
            </div>
          </div>
          <div className="wasteDistribution">
            <h2>Food Waste Through Distribution</h2>
            <h3>
              Food Wasted From Moment of Production to Someone's Table: 30%
            </h3>
            <div className="wasteContent">
              <FontAwesomeIcon
                icon={faHammer}
                style={{ fontSize: "2.5em", width: "2em" }}
              />
              <p>Production and Processing: 10%</p>
            </div>
            <div className="wasteContent">
              <FontAwesomeIcon
                icon={faTruck}
                style={{ fontSize: "2.5em", width: "2em" }}
              />
              <p>Transportation: 10%</p>
            </div>
            <div className="wasteContent">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ fontSize: "2.5em", width: "2em" }}
              />
              <p>Retailers: 10%</p>
            </div>
            <div className="wasteContent">
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ fontSize: "2.5em", width: "2em" }}
              />
              <p>In House: 10%</p>
            </div>
          </div>
        </div>
        <ProblemStatementButton shade="dark" />
      </div>

      <div
        className="dataHighlightBoxLight"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="badOutcome">
          <h1>Bad Outcome: Malnutrition</h1>
          <div className="badOutcomeInfoWrapper">
            <div className="badOutcomeInfo">
              <p>
                9% of the world are severly food insecure. This is 965 million
                people.
              </p>
              <p>
                25% of the world moderately or severly food insecure. This is
                1.9 billion people
              </p>
              <p>8.9% of the world are undernourished</p>
              <p>
                22% of children in the world that are less than 5 years old are
                stunted.
              </p>
            </div>
            <div className="badOutcomeTableWrapper">
              <table>
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ProblemStatementButton shade="light" />
      </div>
    </>
  );
}
