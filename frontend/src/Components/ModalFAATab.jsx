import DoughnutComp from "./DoughnutComp";
import BarComp from "./BarComp";

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

export default function ModalFAATab({ country }) {
  return (
    <div className="foodAndAgrWrapper">
      <h1>Is the food adequately nutritious for the body?</h1>
      <div className="dataHighlightBox">
        <div className="fAANutrition">
          <span>
            <DoughnutComp />
          </span>
          <div className="fAANutritionFactList">
            <div className="fAANutritionFactPositive">
              <p className="fAANutritionFactItem">🟢 Lowest deficieny is: </p>
              <p className="fAANutritionFactItem">🟢 Lowest deficieny is: </p>
              <p className="fAANutritionFactItem">🟢 Lowest deficieny is: </p>
            </div>
            <div className="fAANutritionFactNegative">
              <p className="fAANutritionFactItem">🔴 Highest deficiency is: </p>
              <p className="fAANutritionFactItem">🔴 Highest deficiency is: </p>
              <p className="fAANutritionFactItem">🔴 Highest deficiency is: </p>
            </div>
          </div>
        </div>
      </div>

      <h1>Is There Physical, Geographic, and Economic Access to the Food?</h1>
      <div className="dataHighlightBox">
        <h2>Irrigated vs. Rainfed Crops</h2>
        <div className="fAACrops">
          <div className="fAACropFacts">
            <div className="fAACropFactItem">
              <FontAwesomeIcon
                icon={faCloudRain}
                className="fAACropIcon"
                style={{ color: "rgb(101, 206, 241)" }}
              />
              <p>In {country.country}, the crops are primarily rainfed</p>
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
        <div className="fAAAgriculutureFactsWrapper">
          <div className="fAAAgriculutureFacts">
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
      </div>
      <div>
        <h1>Food Supply Breakdown</h1>
      </div>

      <h1>Once Food is Produced, What Percent is Getting to the People?</h1>
      <div className="dataHighlightBox">
        <div className="fAAWasteBreakdownInfo">
          <div className="fAAWasteCapita">
            <h2 style={{ marginBottom: "3em" }}>Food Waste Per Capita</h2>
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
              Food Wasted From Moment of Production to Someone's Table: 30%
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
              9% of the world are severly food insecure. This is 965 million
              people.
            </p>
            <p>
              25% of the world moderately or severly food insecure. This is 1.9
              billion people
            </p>
            <p>8.9% of the world are undernourished</p>
            <p>
              22% of children in the world that are less than 5 years old are
              stunted.
            </p>
          </div>
          <div className="fAABadOutcomeTableWrapper">
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
    </div>
  );
}
