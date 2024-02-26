import { useEffect, useState } from "react";
import styles from "../Stylesheets/ProblemStatementList.module.css";
import SideNav from "../Components/SideNav";

export default function ProblemStatementList() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [selectedFilters, setSelectedFilters] = useState([]);

  let filters = [
    {
      name: "Large Population",
      tooltipText: "A population that is higher than 1,000,000",
    },
    {
      name: "Small Population",
      tooltipText: "A population that is less than 1,000,000",
    },
  ];

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("/api/countries");
      const json = await response.json();

      if (response.ok) {
        setCountries(json);
        setFilteredCountries(json);
      }
    };

    fetchCountries();
  }, []);

  const handleFilterButtonClick = (filterCategory) => {
    if (selectedFilters.includes(filterCategory)) {
      let i = selectedFilters.filter((j) => j !== filterCategory);
      setSelectedFilters(i);
    } else {
      setSelectedFilters([...selectedFilters, filterCategory]);
    }
  };

  useEffect(() => {
    filterCountries();
  }, [selectedFilters]);

  const filterCountries = () => {
    if (selectedFilters.length > 0) {
      let i = countries;

      selectedFilters.forEach((filter) => {
        switch (filter) {
          case "Large Population":
            i = i.filter((country) => country.population >= 1000000);
            break;
          case "Small Population":
            i = i.filter((country) => country.population < 1000000);
            break;
          case "Large Area":
            i = i.filter((country) => country.size >= 600);
            break;
          case "Small Area":
            i = i.filter((country) => country.size < 600);
            break;
        }
      });
      setFilteredCountries(i);
    } else {
      setFilteredCountries([...countries]);
    }
  };

  return (
    <>
      <div className={styles.problemStatementContainer}>
        <SideNav />
        <div className={styles.contentWrapper}>
          <div className={styles.listTitles}>
            <p>
              <b>Country</b>
            </p>
            <p>
              <b>Problem Statement</b>
            </p>
            <p>
              <b>Link to Problem</b>
            </p>
          </div>
          <div className={styles.listItem}>
            <p>Canada</p>
            <p>Is the food adequately nutritious for the body?</p>
            <p>
              <a href="/problem-statement/1">Go To Problem Statement &rarr;</a>
            </p>
          </div>
          <div className={styles.listItem}>
            <p>Canada</p>
            <p>
              Is There Physical, Geographic, and Economic Access to the Food?
            </p>
            <p>
              <a href="/problem-statement/1">Go To Problem Statement &rarr;</a>
            </p>
          </div>
          <div className={styles.listItem}>
            <p>Canada</p>
            <p>Food Supply Breakdown</p>
            <p>
              <a href="/problem-statement/1">Go To Problem Statement &rarr;</a>
            </p>
          </div>
          <div className={styles.listItem}>
            <p>Canada</p>
            <p>Once Food is Produced, What Percent is Getting to the People?</p>
            <p>
              <a href="/problem-statement/1">Go To Problem Statement &rarr;</a>
            </p>
          </div>
          <div className={styles.listItem}>
            <p>Canada</p>
            <p>Malnutrition</p>
            <p>
              <a href="/problem-statement/1">Go To Problem Statement &rarr;</a>
            </p>
          </div>
          <div className={styles.listItem}>
            <p>USA</p>
            <p>Is the food adequately nutritious for the body?</p>
            <p>
              <a href="/problem-statement/1">Go To Problem Statement &rarr;</a>
            </p>
          </div>
          <div className={styles.listItem}>
            <p>USA</p>
            <p>
              Is There Physical, Geographic, and Economic Access to the Food?
            </p>
            <p>
              <a href="/problem-statement/1">Go To Problem Statement &rarr;</a>
            </p>
          </div>
          <div className={styles.listItem}>
            <p>USA</p>
            <p>Food Supply Breakdown</p>
            <p>
              <a href="/problem-statement/1">Go To Problem Statement &rarr;</a>
            </p>
          </div>
          <div className={styles.listItem}>
            <p>USA</p>
            <p>Once Food is Produced, What Percent is Getting to the People?</p>
            <p>
              <a href="/problem-statement/1">Go To Problem Statement &rarr;</a>
            </p>
          </div>
          <div className={styles.listItem}>
            <p>USA</p>
            <p>Malnutrition</p>
            <p>
              <a href="/problem-statement/1">Go To Problem Statement &rarr;</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
