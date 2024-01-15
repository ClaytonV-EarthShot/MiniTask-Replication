import { useEffect, useState } from 'react';

import InfoBox from "../Components/InfoBox";
import SideNav from '../Components/SideNav';

export default function Third() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState(cities);
  const [selectedFilters, setSelectedFilters] = useState([]);

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
    const fetchCities = async () => {
      const response = await fetch('/api/cities');
      const json = await response.json()

      if (response.ok) {
        setCities(json);
        setFilteredCities(json);
      }
    }

    fetchCities();
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
    filterCities();
    // console.log('These are the current cities in the list');
    // console.dir(cities);
  }, [selectedFilters]);

  const filterCities = () => {
    if (selectedFilters.length > 0) {
      let i = cities;
      selectedFilters.map((filterCategory) => {
        let j = null;
        switch(filterCategory) {
          case 'Large Population':
            j = cities.filter((city) => city.population >= 1000000);
            j.map((cityJ) => {
              i = i.filter((cityI) => cityI === cityJ);
            });
            break;
          case 'Small Population':
            j = cities.filter((city) => city.population < 1000000);
            let tempArray = [];
            j.map((city) => {
              let index = i.indexOf(city);
              let splicedCity = i.splice(index);
              tempArray.push('hello');
              console.dir(splicedCity);
              // tempArray.push(splicedCity);
              // tempArray = tempArray.flat;
            });
            // i = tempArray;
            break;
          case 'Large Area':
            j = cities.filter((city) => city.size >= 600);
            j.map((cityJ) => {
              i = i.filter((cityI) => cityI === cityJ);
            });
            break;
          case 'Small Area':
            j = cities.filter((city) => city.size < 600);
            j.map((cityJ) => {
              i = i.filter((cityI) => cityI === cityJ);
            });
            break;
        }
      })
      setFilteredCities(i);
    } else {
      setFilteredCities([...cities]);
    }
  }

  return (
    <>
      <div className='thirdPageContainer'>
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
            {filteredCities && filteredCities.map((city, index) => (
              <InfoBox 
                key={city._id}
                cityNumber={index + 1}
                cityName={city.name}
                bgImage={city.imageLinkName}
                cityPopulation={city.population}
                citySize={city.size}
              />
            ))}
          </div>    
        
        </div>
      </div>
    </>
  )
} 