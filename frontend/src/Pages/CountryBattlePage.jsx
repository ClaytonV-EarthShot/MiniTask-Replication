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

  // fetch COUNTRY ONE data to fill webpage
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`/api/countries/${countryOneID}`);
      const json = await response.json();

      if (response.ok) {
        setCountryOne(json);
      }
    };

    fetchCountry();
  }, [selectedCountryOne]);

  // fetch COUNTRY TWO data to fill webpage
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`/api/countries/${countryTwoID}`);
      const json = await response.json();

      if (response.ok) {
        setCountryTwo(json);
      }
    };

    fetchCountry();
  }, [selectedCountryTwo]);

  useEffect(() => {
    const getCountryImage = () => {
      setCountryOneImage(countryOne.imageLink);
    };

    getCountryImage();
  }, [countryOne]);

  useEffect(() => {
    const getCountryImage = () => {
      setCountryTwoImage(countryTwo.imageLink);
    };

    getCountryImage();
  }, [countryTwo]);

  // fetch BUCKET ONE - COUNTRY ONE data to fill webpage
  useEffect(() => {
    const fetchBucketOne = async () => {
      const response = await fetch(`/api/bucketone/${countryOne.bucketOne}`);
      const json = await response.json();

      if (response.ok) {
        setBucketOneCountryOne(json);
      }
    };

    fetchBucketOne();
  }, [countryOne]);

  // fetch BUCKET TWO - COUNTRY TWO data to fill webpage
  useEffect(() => {
    const fetchBucketOne = async () => {
      const response = await fetch(`/api/bucketone/${countryTwo.bucketOne}`);
      const json = await response.json();

      if (response.ok) {
        setBucketOneCountryTwo(json);
      }
    };

    fetchBucketOne();
  }, [countryTwo]);

  const handleSelectChangeOne = (event) => {
    setSelectedCountryOne(event.target.value);
    setCountryOneID(event.target.options[event.target.selectedIndex].id);
  };

  const handleSelectChangeTwo = (event) => {
    setSelectedCountryTwo(event.target.value);
    setCountryTwoID(event.target.options[event.target.selectedIndex].id);
  };

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
        </div>
      </div>
    </>
  );
}
