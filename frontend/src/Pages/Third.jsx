import { useEffect, useState } from 'react';

import InfoBox from "../Components/InfoBox";
import SideNav from '../Components/SideNav';
import InfoBoxModal from '../Components/InfoBoxModal';

export default function Third() {
  // const [cities, setCities] = useState([]);
  // const [filteredCities, setFilteredCities] = useState(cities);
  // const [modalCity, setModalCity] = useState({});

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [modalCountry, setModalCountry] = useState({});
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isVisible, setVisible] = useState(false);

  let filters = [
    {
      name: 'Large Population',
      tooltipText: 'A population that is higher than 1,000,000'
    },
    {
      name: 'Small Population',
      tooltipText: 'A population that is less than 1,000,000'
    },
    {
      name: 'Large Area',
      tooltipText: 'Area bigger than 600km²'
    },
    {
      name: 'Small Area',
      tooltipText: 'Area smaller than 600km²'
    }
  ]

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('/api/countries');
      const json = await response.json();

      // const bucketOneResponse = await fetch('/api/bucketone');
      // const bucketOneJson = await bucketOneResponse.json();

      if (response.ok) {
        console.log('we was okay');
        setCountries(json);
        setFilteredCountries(json);
      }

    }

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
        switch(filter) {
          case 'Large Population':
            i = i.filter((country) => country.population >= 1000000);
            break;
          case 'Small Population':
            i = i.filter((country) => country.population < 1000000);
            break;
          case 'Large Area':
            i = i.filter((country) => country.size >= 600);  
            break;
          case 'Small Area':
            i = i.filter((country) => country.size < 600);  
            break;
        }
      })
      setFilteredCountries(i);
    } else {
      setFilteredCountries([...countries]);
    }
  }

  const openModal = (country) => {
    setModalCountry(country);
    setVisible(true);
  }

  return (
    <>
      <div className='thirdPageContainer'>
        
        <InfoBoxModal country={modalCountry} visibility={isVisible} closeModal={() => setVisible(false)}/>
        
        <SideNav />

        <div style={{display: 'flex', flexDirection: 'column', width: '93%'}}>
          
          <div className='filterButtonContainer'>
            {filters.map((category, index) => (
              <button
                onClick={() => handleFilterButtonClick(category.name)}
                className={`
                  filterButton 
                  ${selectedFilters?.includes(category.name) ? "active" : ""}
                `}
                key={index}
                data-toolTip={category.tooltipText}
              >
                <p className='category'>{category.name}</p>
              </button>
            ))}
          </div>

          <div className='infoBoxWrapper'>
            {filteredCountries && filteredCountries.map((country, index) => (
              <button className='infoBoxContainerButton'
              onClick={() => openModal(country)}>
                <InfoBox 
                  key={country._id}
                  countryNumber={index + 1}
                  countryName={country.country}
                  countryPopulation={country.population}
                  countryLDC={country.LDC}
                />
              </button>
            ))}
          </div>    
        </div>
      </div>
    </>
  )
} 