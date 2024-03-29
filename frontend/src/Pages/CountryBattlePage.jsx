import { useState, useEffect } from "react";
import styles from "../Stylesheets/CountryBattle.module.css";
import SideNav from "../Components/SideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDoubleUp,
  faAngleDown,
  faAngleDoubleDown,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import BarComp from "../Components/BarComp";

export default function CountryBattlePage() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryOne, setSelectedCountryOne] = useState("");
  const [selectedCountryTwo, setSelectedCountryTwo] = useState("");
  const [countryOneID, setCountryOneID] = useState("");
  const [countryTwoID, setCountryTwoID] = useState("");
  const [countryOne, setCountryOne] = useState("");
  const [countryTwo, setCountryTwo] = useState("");
  const [bucketOneCountryOne, setBucketOneCountryOne] = useState("");
  const [bucketOneCountryTwo, setBucketOneCountryTwo] = useState("");
  const [countryOneImage, setCountryOneImage] = useState("");
  const [countryTwoImage, setCountryTwoImage] = useState("");
  const [sectionOneWinner, setSectionOneWinner] = useState("");
  const [sectionTwoWinner, setSectionTwoWinner] = useState("");
  const [sectionThreeWinner, setSectionThreeWinner] = useState("");
  const [sectionFourWinner, setSectionFourWinner] = useState("");
  const [sectionFiveWinner, setSectionFiveWinner] = useState("");

  // Fetch ALL countries to fill list
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("/api/countries/");
      const json = await response.json();

      if (response.ok) {
        setCountries(json);
      }
    };

    fetchCountries();
  }, []);

  // fetch COUNTRY ONE AND COUNTRY TWO data to fill webpage.
  // This will force user to have to select BOTH countries on drop down menu to not mess up equations.
  // Won't display any data UNTIL the user selects both.
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`/api/countries/${countryOneID}`);
      const responseTwo = await fetch(`/api/countries/${countryTwoID}`);
      const json = await response.json();
      const jsonTwo = await responseTwo.json();

      if (response.ok && responseTwo.ok) {
        setCountryOne(json);
        setCountryTwo(jsonTwo);
      }
    };

    if (selectedCountryOne !== "" && selectedCountryTwo !== "") {
      fetchCountry();
    }
  }, [selectedCountryOne, selectedCountryTwo]);

  useEffect(() => {
    const getCountryImage = () => {
      setCountryOneImage(countryOne.imageLink);
      setCountryTwoImage(countryTwo.imageLink);
    };

    if (countryOne !== "" && countryTwo !== "") {
      getCountryImage();
    }
  }, [countryOne, countryTwo]);

  // fetch BUCKET ONE - COUNTRY ONE data to fill webpage
  // fetch BUCKET TWO - COUNTRY TWO data to fill webpage
  useEffect(() => {
    const fetchBucketOne = async () => {
      const response = await fetch(`/api/bucketone/${countryOne.bucketOne}`);
      const responseTwo = await fetch(`/api/bucketone/${countryTwo.bucketOne}`);
      const json = await response.json();
      const jsonTwo = await responseTwo.json();

      if (response.ok && responseTwo.ok) {
        setBucketOneCountryOne(json);
        setBucketOneCountryTwo(jsonTwo);
      }
    };

    if (countryOne !== "" && countryTwo !== "") {
      fetchBucketOne();
    }
  }, [countryOne, countryTwo]);

  const filterNum = (string) => {
    if (string) {
      const numericalChar = new Set([
        ".",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ]);
      string = string
        .split("")
        .filter((char) => numericalChar.has(char))
        .join("");
      return string;
    }
  };

  const checkWinner = (sectionFunction, arrayOfObject) => {
    let firstItemScore = 0;
    let secondItemScore = 0;

    for (let i = 0; i < arrayOfObject.length; i++) {
      let newItemOne = filterNum(arrayOfObject[i][0]);
      let newItemTwo = filterNum(arrayOfObject[i][1]);

      newItemOne = Number(newItemOne);
      newItemTwo = Number(newItemTwo);

      const dividedNumber = newItemOne / newItemTwo;

      if (dividedNumber >= 1.4) {
        firstItemScore += 2;
      } else if (dividedNumber < 1.4 && dividedNumber >= 1.1) {
        firstItemScore += 1;
      } else if (dividedNumber > 0.75 && dividedNumber < 0.9) {
        secondItemScore += 1;
      } else if (dividedNumber <= 0.75) {
        secondItemScore += 2;
      }
    }

    if (firstItemScore > secondItemScore) {
      sectionFunction(countryOne.country);
    } else if (firstItemScore < secondItemScore) {
      sectionFunction(countryTwo.country);
    } else {
      sectionFunction("Tie!");
    }
  };

  useEffect(() => {
    if (countryOne !== "" && countryTwo !== "") {
      if (bucketOneCountryOne !== "" && bucketOneCountryTwo !== "") {
        checkWinner(setSectionOneWinner, [
          [
            bucketOneCountryOne.caloricSupplyPerCapita,
            bucketOneCountryTwo.caloricSupplyPerCapita,
          ],
          [
            bucketOneCountryOne.proteinSupplyPerCapita,
            bucketOneCountryTwo.proteinSupplyPerCapita,
          ],
          [
            bucketOneCountryOne.supplyFromAnimalBasedFoods,
            bucketOneCountryTwo.supplyFromAnimalBasedFoods,
          ],
          [
            bucketOneCountryOne.supplyFromPlantBasedFoods,
            bucketOneCountryTwo.supplyFromPlantBasedFoods,
          ],
          [
            bucketOneCountryOne.fatSupplyPerCapita,
            bucketOneCountryTwo.fatSupplyPerCapita,
          ],
          [
            bucketOneCountryOne.dietaryEnergySupplyAdequacy,
            bucketOneCountryTwo.dietaryEnergySupplyAdequacy,
          ],
          [
            bucketOneCountryOne.minimumDietaryEnergyRequirement,
            bucketOneCountryTwo.minimumDietaryEnergyRequirement,
          ],
        ]);

        if (bucketOneCountryOne !== "" && bucketOneCountryTwo !== "") {
          checkWinner(setSectionTwoWinner, [
            [bucketOneCountryOne.retail, bucketOneCountryTwo.retail],
            [
              bucketOneCountryOne.outOfHomeConsumption,
              bucketOneCountryTwo.outOfHomeConsumption,
            ],
            [bucketOneCountryOne.household, bucketOneCountryTwo.household],
          ]);
        }

        if (bucketOneCountryOne !== "" && bucketOneCountryTwo !== "") {
          checkWinner(setSectionThreeWinner, [
            [
              bucketOneCountryOne.agriculturalWaterWithdrawal,
              bucketOneCountryTwo.agriculturalWaterWithdrawal,
            ],
            [
              bucketOneCountryOne.fertilizerUsePerUnitOfLand,
              bucketOneCountryTwo.fertilizerUsePerUnitOfLand,
            ],
            [
              bucketOneCountryOne.cropLandPercent,
              bucketOneCountryTwo.cropLandPercent,
            ],
            [
              bucketOneCountryOne.agricultureFactorProductivity,
              bucketOneCountryTwo.agricultureFactorProductivity,
            ],
            [
              bucketOneCountryOne.agriculturalRAndD,
              bucketOneCountryTwo.agriculturalRAndD,
            ],
            [bucketOneCountryOne.soilErosion, bucketOneCountryTwo.soilErosion],
          ]);
        }

        if (bucketOneCountryOne !== "" && bucketOneCountryTwo !== "") {
          checkWinner(setSectionFourWinner, [
            [
              bucketOneCountryOne.rainfedMaize,
              bucketOneCountryTwo.rainfedMaize,
            ],
            [bucketOneCountryOne.rainfedRice, bucketOneCountryTwo.rainfedRice],
            [
              bucketOneCountryOne.rainfedWheat,
              bucketOneCountryTwo.rainfedWheat,
            ],
            [
              bucketOneCountryOne.rainfedSorghum,
              bucketOneCountryTwo.rainfedSorghum,
            ],
            [
              bucketOneCountryOne.rainfedMillet,
              bucketOneCountryTwo.rainfedMillet,
            ],
            [
              bucketOneCountryOne.rainfedBarley,
              bucketOneCountryTwo.rainfedBarley,
            ],
            [
              bucketOneCountryOne.irrigatedMaize,
              bucketOneCountryTwo.irrigatedMaize,
            ],
            [
              bucketOneCountryOne.irrigatedRice,
              bucketOneCountryTwo.irrigatedRice,
            ],
            [
              bucketOneCountryOne.irrigatedWheat,
              bucketOneCountryTwo.irrigatedWheat,
            ],
            [
              bucketOneCountryOne.irrigatedBarley,
              bucketOneCountryTwo.irrigatedBarley,
            ],
            [
              bucketOneCountryOne.rainfedSoybean,
              bucketOneCountryTwo.rainfedSoybean,
            ],
            [
              bucketOneCountryOne.rainfedCommonBean,
              bucketOneCountryTwo.rainfedCommonBean,
            ],
            [
              bucketOneCountryOne.rainfedFabaBean,
              bucketOneCountryTwo.rainfedFabaBean,
            ],
            [bucketOneCountryOne.rainfedPea, bucketOneCountryTwo.rainfedPea],
            [
              bucketOneCountryOne.rainfedChickpea,
              bucketOneCountryTwo.rainfedChickpea,
            ],
            [
              bucketOneCountryOne.rainfedCowpea,
              bucketOneCountryTwo.rainfedCowpea,
            ],
            [
              bucketOneCountryOne.rainfedPigeonpea,
              bucketOneCountryTwo.rainfedPigeonpea,
            ],
            [
              bucketOneCountryOne.rainfedGroundnut,
              bucketOneCountryTwo.rainfedGroundnut,
            ],
            [
              bucketOneCountryOne.irrigatedSoybean,
              bucketOneCountryTwo.irrigatedSoybean,
            ],
            [
              bucketOneCountryOne.irrigatedCommonBean,
              bucketOneCountryTwo.irrigatedCommonBean,
            ],
            [
              bucketOneCountryOne.irrigatedPea,
              bucketOneCountryTwo.irrigatedPea,
            ],
            [
              bucketOneCountryOne.rainfedPotato,
              bucketOneCountryTwo.rainfedPotato,
            ],
            [
              bucketOneCountryOne.rainfedSugarcane,
              bucketOneCountryTwo.rainfedSugarcane,
            ],
            [
              bucketOneCountryOne.rainfedRapeseed,
              bucketOneCountryTwo.rainfedRapeseed,
            ],
            [
              bucketOneCountryOne.rainfedOilPalm,
              bucketOneCountryTwo.rainfedOilPalm,
            ],
            [
              bucketOneCountryOne.irrigatedRapeseed,
              bucketOneCountryTwo.irrigatedRapeseed,
            ],
            [
              bucketOneCountryOne.irrigatedCotton,
              bucketOneCountryTwo.irrigatedCotton,
            ],
            [
              bucketOneCountryOne.irrigatedPotato,
              bucketOneCountryTwo.irrigatedPotato,
            ],
            [
              bucketOneCountryOne.irrigatedSugarcane,
              bucketOneCountryTwo.irrigatedSugarcane,
            ],
            [
              bucketOneCountryOne.irrigatedSugarBeet,
              bucketOneCountryTwo.irrigatedSugarBeet,
            ],
          ]);
        }

        if (bucketOneCountryOne !== "" && bucketOneCountryTwo !== "") {
          checkWinner(setSectionFiveWinner, [
            [
              bucketOneCountryOne.percentFoodWastedProductionToTable,
              bucketOneCountryTwo.percentFoodWastedProductionToTable,
            ],
            [
              bucketOneCountryOne.productionAndProcessing,
              bucketOneCountryTwo.productionAndProcessing,
            ],
            [
              bucketOneCountryOne.transportation,
              bucketOneCountryTwo.transportation,
            ],
            [bucketOneCountryOne.retailers, bucketOneCountryTwo.retailers],
            [bucketOneCountryOne.inHouse, bucketOneCountryTwo.inHouse],
          ]);
        }
      }
    }
  }, [bucketOneCountryOne, bucketOneCountryTwo]);

  const handleSelectChangeOne = (event) => {
    setSelectedCountryOne(event.target.value);
    setCountryOneID(event.target.options[event.target.selectedIndex].id);
  };

  const handleSelectChangeTwo = (event) => {
    setSelectedCountryTwo(event.target.value);
    setCountryTwoID(event.target.options[event.target.selectedIndex].id);
  };

  const returnIcon = (itemOne, itemTwo) => {
    let newItemOne = filterNum(itemOne);
    let newItemTwo = filterNum(itemTwo);

    newItemOne = Number(newItemOne);
    newItemTwo = Number(newItemTwo);

    const dividedNumber = newItemOne / newItemTwo;

    if (dividedNumber >= 1.4) {
      return faAngleDoubleUp;
    } else if (dividedNumber < 1.4 && dividedNumber >= 1.1) {
      return faAngleUp;
    } else if (dividedNumber > 0.75 && dividedNumber < 0.9) {
      return faAngleDown;
    } else if (dividedNumber <= 0.75) {
      return faAngleDoubleDown;
    } else {
      return faMinus;
    }
  };

  const returnColor = (itemOne, itemTwo) => {
    let newItemOne = filterNum(itemOne);
    let newItemTwo = filterNum(itemTwo);

    newItemOne = Number(newItemOne);
    newItemTwo = Number(newItemTwo);

    const dividedNumber = newItemOne / newItemTwo;

    if (dividedNumber >= 1.4) {
      return "rgb(38, 192, 76)";
    } else if (dividedNumber < 1.4 && dividedNumber >= 1.1) {
      return "rgb(76, 192, 38)";
    } else if (dividedNumber > 0.75 && dividedNumber < 0.9) {
      return "rgb(192, 76, 38)";
    } else if (dividedNumber <= 0.75) {
      return "rgb(192, 38, 38)";
    } else {
      return "rgb(192, 192, 38)";
    }
  };

  const numberConverter = (arrayOfObject) => {
    let returnArray = [];

    for (let i = 0; i < arrayOfObject.length; i++) {
      let newItem = filterNum(arrayOfObject[i]);

      newItem = Number(newItem);

      returnArray.push(newItem);
    }

    return returnArray;
  };

  return (
    <>
      <div className={styles.countryBattleContainer}>
        <SideNav />
        <div className={styles.contentWrapper}>
          <div className={styles.contentBanner}>
            <h1>Country Battle</h1>
            <div className={styles.countrySelect}>
              <select
                value={selectedCountryOne.country}
                onChange={handleSelectChangeOne}
              >
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.country} id={country._id}>
                    {country.country}
                  </option>
                ))}
              </select>
              <select
                value={selectedCountryTwo.country}
                onChange={handleSelectChangeTwo}
              >
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.country} id={country._id}>
                    {country.country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.content}>
            <div
              className={`${styles.country}`}
              style={{
                backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.4) 100%), 
        url(${countryOneImage})`,
              }}
            >
              <h2>{countryOne.country}</h2>
            </div>
            <div
              className={`${styles.country}`}
              style={{
                backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.4) 100%), 
        url(${countryTwoImage})`,
              }}
            >
              <h2>{countryTwo.country}</h2>
            </div>
          </div>

          <div className={styles.contentTitle}>Caloric Supply Per Capita</div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.caloricSupplyPerCapita}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.caloricSupplyPerCapita,
                    bucketOneCountryTwo.caloricSupplyPerCapita
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.caloricSupplyPerCapita,
                      bucketOneCountryTwo.caloricSupplyPerCapita
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.caloricSupplyPerCapita,
                    bucketOneCountryOne.caloricSupplyPerCapita
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.caloricSupplyPerCapita,
                      bucketOneCountryOne.caloricSupplyPerCapita
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.caloricSupplyPerCapita}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>Protein Supply Per Capita</div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.proteinSupplyPerCapita}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.proteinSupplyPerCapita,
                    bucketOneCountryTwo.proteinSupplyPerCapita
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.proteinSupplyPerCapita,
                      bucketOneCountryTwo.proteinSupplyPerCapita
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.proteinSupplyPerCapita,
                    bucketOneCountryOne.proteinSupplyPerCapita
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.proteinSupplyPerCapita,
                      bucketOneCountryOne.proteinSupplyPerCapita
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.proteinSupplyPerCapita}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>
            Supply From Animal Based Foods
          </div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.supplyFromAnimalBasedFoods}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.supplyFromAnimalBasedFoods,
                    bucketOneCountryTwo.supplyFromAnimalBasedFoods
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.supplyFromAnimalBasedFoods,
                      bucketOneCountryTwo.supplyFromAnimalBasedFoods
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.supplyFromAnimalBasedFoods,
                    bucketOneCountryOne.supplyFromAnimalBasedFoods
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.supplyFromAnimalBasedFoods,
                      bucketOneCountryOne.supplyFromAnimalBasedFoods
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.supplyFromAnimalBasedFoods}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>
            Supply From Plant Based Foods
          </div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.supplyFromPlantBasedFoods}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.supplyFromPlantBasedFoods,
                    bucketOneCountryTwo.supplyFromPlantBasedFoods
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.supplyFromPlantBasedFoods,
                      bucketOneCountryTwo.supplyFromPlantBasedFoods
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.supplyFromPlantBasedFoods,
                    bucketOneCountryOne.supplyFromPlantBasedFoods
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.supplyFromPlantBasedFoods,
                      bucketOneCountryOne.supplyFromPlantBasedFoods
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.supplyFromPlantBasedFoods}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>Fat Supply Per Capita</div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.fatSupplyPerCapita}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.fatSupplyPerCapita,
                    bucketOneCountryTwo.fatSupplyPerCapita
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.fatSupplyPerCapita,
                      bucketOneCountryTwo.fatSupplyPerCapita
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.fatSupplyPerCapita,
                    bucketOneCountryOne.fatSupplyPerCapita
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.fatSupplyPerCapita,
                      bucketOneCountryOne.fatSupplyPerCapita
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.fatSupplyPerCapita}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>
            Dietary Energy Supply Adequacy
          </div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.dietaryEnergySupplyAdequacy}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.dietaryEnergySupplyAdequacy,
                    bucketOneCountryTwo.dietaryEnergySupplyAdequacy
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.dietaryEnergySupplyAdequacy,
                      bucketOneCountryTwo.dietaryEnergySupplyAdequacy
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.dietaryEnergySupplyAdequacy,
                    bucketOneCountryOne.dietaryEnergySupplyAdequacy
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.dietaryEnergySupplyAdequacy,
                      bucketOneCountryOne.dietaryEnergySupplyAdequacy
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.dietaryEnergySupplyAdequacy}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>
            Minimum Dietary Energy Requirement
          </div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.minimumDietaryEnergyRequirement}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.minimumDietaryEnergyRequirement,
                    bucketOneCountryTwo.minimumDietaryEnergyRequirement
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.minimumDietaryEnergyRequirement,
                      bucketOneCountryTwo.minimumDietaryEnergyRequirement
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.minimumDietaryEnergyRequirement,
                    bucketOneCountryOne.minimumDietaryEnergyRequirement
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.minimumDietaryEnergyRequirement,
                      bucketOneCountryOne.minimumDietaryEnergyRequirement
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.minimumDietaryEnergyRequirement}</p>
              </div>
            </div>
          </div>

          <div className={styles.barGraphContainer}>
            {bucketOneCountryOne !== "" && bucketOneCountryTwo !== "" && (
              <BarComp
                labels={[
                  "Caloric Supply Per Capita",
                  "Protein Supply Per Capita",
                  "Supply From Animal Based Foods",
                  "Supply From Animal Based Foods",
                  "Supply From Plant Based Foods",
                  "Fat Supply Per Capita",
                  "Dietary Energy Supply Adequacy",
                  "Minimum Dietary Energy Requirement",
                ]}
                labelOne={countryOne.country}
                labelTwo={countryTwo.country}
                dataOne={numberConverter([
                  bucketOneCountryOne.caloricSupplyPerCapita,
                  bucketOneCountryOne.proteinSupplyPerCapita,
                  bucketOneCountryOne.supplyFromAnimalBasedFoods,
                  bucketOneCountryOne.supplyFromPlantBasedFoods,
                  bucketOneCountryOne.fatSupplyPerCapita,
                  bucketOneCountryOne.dietaryEnergySupplyAdequacy,
                  bucketOneCountryOne.minimumDietaryEnergyRequirement,
                ])}
                dataTwo={numberConverter([
                  bucketOneCountryTwo.caloricSupplyPerCapita,
                  bucketOneCountryTwo.proteinSupplyPerCapita,
                  bucketOneCountryTwo.supplyFromAnimalBasedFoods,
                  bucketOneCountryTwo.supplyFromPlantBasedFoods,
                  bucketOneCountryTwo.fatSupplyPerCapita,
                  bucketOneCountryTwo.dietaryEnergySupplyAdequacy,
                  bucketOneCountryTwo.minimumDietaryEnergyRequirement,
                ])}
              />
            )}
          </div>

          <div className={styles.categoryResult}>
            {sectionOneWinner === countryOne.country && (
              <>
                <h2>{sectionOneWinner} is the winner!</h2>
              </>
            )}
            {sectionOneWinner === countryTwo.country && (
              <>
                <h2>{sectionOneWinner} is the winner!</h2>
              </>
            )}
            {sectionOneWinner !== countryOne.country &&
              sectionOneWinner !== countryTwo.country && (
                <>
                  <h2>Both countries are tied!</h2>
                </>
              )}
          </div>

          <div className={styles.contentTitle}>Retail</div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.retail}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.retail,
                    bucketOneCountryTwo.retail
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.retail,
                      bucketOneCountryTwo.retail
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.retail,
                    bucketOneCountryOne.retail
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.retail,
                      bucketOneCountryOne.retail
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.retail}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>Out of Home Consumption</div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.outOfHomeConsumption}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.outOfHomeConsumption,
                    bucketOneCountryTwo.outOfHomeConsumption
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.outOfHomeConsumption,
                      bucketOneCountryTwo.outOfHomeConsumption
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.outOfHomeConsumption,
                    bucketOneCountryOne.outOfHomeConsumption
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.outOfHomeConsumption,
                      bucketOneCountryOne.outOfHomeConsumption
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.outOfHomeConsumption}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>Household</div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.household}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.household,
                    bucketOneCountryTwo.household
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.household,
                      bucketOneCountryTwo.household
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.household,
                    bucketOneCountryOne.household
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.household,
                      bucketOneCountryOne.household
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.household}</p>
              </div>
            </div>
          </div>

          <div className={styles.barGraphContainer}>
            {bucketOneCountryOne !== "" && bucketOneCountryTwo !== "" && (
              <BarComp
                labels={["Retail", "Out of Home Consumption", "Household"]}
                labelOne={countryOne.country}
                labelTwo={countryTwo.country}
                dataOne={numberConverter([
                  bucketOneCountryOne.retail,
                  bucketOneCountryOne.outOfHomeConsumption,
                  bucketOneCountryOne.household,
                ])}
                dataTwo={numberConverter([
                  bucketOneCountryTwo.retail,
                  bucketOneCountryTwo.outOfHomeConsumption,
                  bucketOneCountryTwo.household,
                ])}
              />
            )}
          </div>

          <div className={styles.categoryResult}>
            {sectionTwoWinner === countryOne.country && (
              <>
                <h2>{sectionTwoWinner} is the winner!</h2>
              </>
            )}
            {sectionTwoWinner === countryTwo.country && (
              <>
                <h2>{sectionTwoWinner} is the winner!</h2>
              </>
            )}
            {sectionTwoWinner !== countryOne.country &&
              sectionTwoWinner !== countryTwo.country && (
                <>
                  <h2>Both countries are tied!</h2>
                </>
              )}
          </div>

          <div className={styles.contentTitle}>
            Agricultureal Water Withdrawal
          </div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.agriculturalWaterWithdrawal}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.agriculturalWaterWithdrawal,
                    bucketOneCountryTwo.agriculturalWaterWithdrawal
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.agriculturalWaterWithdrawal,
                      bucketOneCountryTwo.agriculturalWaterWithdrawal
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.agriculturalWaterWithdrawal,
                    bucketOneCountryOne.agriculturalWaterWithdrawal
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.agriculturalWaterWithdrawal,
                      bucketOneCountryOne.agriculturalWaterWithdrawal
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.agriculturalWaterWithdrawal}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>
            Fertilizer Used Per Unit of Land
          </div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.fertilizerUsePerUnitOfLand}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.fertilizerUsePerUnitOfLand,
                    bucketOneCountryTwo.fertilizerUsePerUnitOfLand
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.fertilizerUsePerUnitOfLand,
                      bucketOneCountryTwo.fertilizerUsePerUnitOfLand
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.fertilizerUsePerUnitOfLand,
                    bucketOneCountryOne.fertilizerUsePerUnitOfLand
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.fertilizerUsePerUnitOfLand,
                      bucketOneCountryOne.fertilizerUsePerUnitOfLand
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.fertilizerUsePerUnitOfLand}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>Crop Land Percentage</div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.cropLandPercent}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.cropLandPercent,
                    bucketOneCountryTwo.cropLandPercent
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.cropLandPercent,
                      bucketOneCountryTwo.cropLandPercent
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.cropLandPercent,
                    bucketOneCountryOne.cropLandPercent
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.cropLandPercent,
                      bucketOneCountryOne.cropLandPercent
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.cropLandPercent}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>
            Agriculture Factor Productivity
          </div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.agricultureFactorProductivity}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.agricultureFactorProductivity,
                    bucketOneCountryTwo.agricultureFactorProductivity
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.agricultureFactorProductivity,
                      bucketOneCountryTwo.agricultureFactorProductivity
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.agricultureFactorProductivity,
                    bucketOneCountryOne.agricultureFactorProductivity
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.agricultureFactorProductivity,
                      bucketOneCountryOne.agricultureFactorProductivity
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.agricultureFactorProductivity}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentTitle}>Agricultural R&D</div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.agriculturalRAndD}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.agriculturalRAndD,
                    bucketOneCountryTwo.agriculturalRAndD
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.agriculturalRAndD,
                      bucketOneCountryTwo.agriculturalRAndD
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.agriculturalRAndD,
                    bucketOneCountryOne.agriculturalRAndD
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.agriculturalRAndD,
                      bucketOneCountryOne.agriculturalRAndD
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.agriculturalRAndD}</p>
              </div>
            </div>
          </div>

          <div className={styles.barGraphContainer}>
            {bucketOneCountryOne !== "" && bucketOneCountryTwo !== "" && (
              <BarComp
                labels={[
                  "Agricultureal Water Withdrawal",
                  "Fertilizer Used Per Unit of Land",
                  "Crop Land Percentage",
                  "Agriculture Factor Productivity",
                  "Agricultural R&D",
                ]}
                labelOne={countryOne.country}
                labelTwo={countryTwo.country}
                dataOne={numberConverter([
                  bucketOneCountryOne.agriculturalWaterWithdrawal,
                  bucketOneCountryOne.fertilizerUsePerUnitOfLand,
                  bucketOneCountryOne.cropLandPercent,
                  bucketOneCountryOne.agricultureFactorProductivity,
                  bucketOneCountryOne.agriculturalRAndD,
                ])}
                dataTwo={numberConverter([
                  bucketOneCountryTwo.agriculturalWaterWithdrawal,
                  bucketOneCountryTwo.fertilizerUsePerUnitOfLand,
                  bucketOneCountryTwo.cropLandPercent,
                  bucketOneCountryTwo.agricultureFactorProductivity,
                  bucketOneCountryTwo.agriculturalRAndD,
                ])}
              />
            )}
          </div>

          <div className={styles.categoryResult}>
            {sectionThreeWinner === countryOne.country && (
              <>
                <h2>{sectionTwoWinner} is the winner!</h2>
              </>
            )}
            {sectionThreeWinner === countryTwo.country && (
              <>
                <h2>{sectionTwoWinner} is the winner!</h2>
              </>
            )}
            {sectionThreeWinner !== countryOne.country &&
              sectionThreeWinner !== countryTwo.country && (
                <>
                  <h2>Both countries are tied!</h2>
                </>
              )}
          </div>

          <div className={styles.contentTitle}>Rainfed Maize</div>
          <div className={styles.content}>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <p>{bucketOneCountryOne.rainfedMaize}</p>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryOne.rainfedMaize,
                    bucketOneCountryTwo.rainfedMaize
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryOne.rainfedMaize,
                      bucketOneCountryTwo.rainfedMaize
                    ),
                  }}
                />
              </div>
            </div>
            <div className={`${styles.countryData}`}>
              <div className={styles.items}>
                <FontAwesomeIcon
                  icon={returnIcon(
                    bucketOneCountryTwo.rainfedMaize,
                    bucketOneCountryOne.rainfedMaize
                  )}
                  style={{
                    fontSize: "2em",
                    color: returnColor(
                      bucketOneCountryTwo.rainfedMaize,
                      bucketOneCountryOne.rainfedMaize
                    ),
                  }}
                />
                <p>{bucketOneCountryTwo.rainfedMaize}</p>
              </div>
            </div>
          </div>

          <div className={styles.barGraphContainer}>
            {bucketOneCountryOne !== "" && bucketOneCountryTwo !== "" && (
              <BarComp
                labels={[
                  "Rainfed Maize",
                  "Rainfed Rice",
                  "Rainfed Wheat",
                  "Rainfed Sorghum",
                  "Rainfed Millet",
                  "Rainfed Barley",
                  "Irrigated Maize",
                  "Irrigated Rice",
                  "Irrigated Wheat",
                  "Irrigated Barley",
                  "Rainfed Soybean",
                  "Rainfed Common Bean",
                  "Rainfed Faba Bean",
                  "Rainfed Pea",
                  "Rainfed Chickpea",
                  "Rainfed Cowpea",
                  "Rainfed Pigeonpea",
                  "Rainfed Groundnut",
                  "Rainfed Cowpea",
                  "Irrigated Soybean",
                  "Irrigated Common Bean",
                  "Irrigated Pea",
                ]}
                labelOne={countryOne.country}
                labelTwo={countryTwo.country}
                dataOne={numberConverter([
                  bucketOneCountryOne.agriculturalWaterWithdrawal,
                  bucketOneCountryOne.fertilizerUsePerUnitOfLand,
                  bucketOneCountryOne.cropLandPercent,
                  bucketOneCountryOne.agricultureFactorProductivity,
                  bucketOneCountryOne.agriculturalRAndD,
                ])}
                dataTwo={numberConverter([
                  bucketOneCountryTwo.agriculturalWaterWithdrawal,
                  bucketOneCountryTwo.fertilizerUsePerUnitOfLand,
                  bucketOneCountryTwo.cropLandPercent,
                  bucketOneCountryTwo.agricultureFactorProductivity,
                  bucketOneCountryTwo.agriculturalRAndD,
                ])}
              />
            )}
          </div>

          <div className={styles.categoryResult}>
            {sectionFourWinner === countryOne.country && (
              <>
                <h2>{sectionTwoWinner} is the winner!</h2>
              </>
            )}
            {sectionFourWinner === countryTwo.country && (
              <>
                <h2>{sectionTwoWinner} is the winner!</h2>
              </>
            )}
            {sectionFourWinner !== countryOne.country &&
              sectionFourWinner !== countryTwo.country && (
                <>
                  <h2>Both countries are tied!</h2>
                </>
              )}
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
