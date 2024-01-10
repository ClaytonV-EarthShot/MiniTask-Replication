import { useEffect, useState } from 'react';

import InfoBox from "../Components/InfoBox"

export default function Third() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState(cities);
  const [selectedFilters, setSelectedFilters] = useState([]);

  let filters = ['LargePopulation', 'SmallPopulation'];

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
    console.log('These are the current cities in the list');
    console.dir(cities);
  }, [selectedFilters]);

  const filterCities = () => {
    if (selectedFilters.length > 0) {
      let i = selectedFilters.map((filterCategory) => {
        let j = null;
        switch(filterCategory) {
          case 'LargePopulation':
            j = cities.filter((city) => city.population >= 1000000)
            return j;
          case 'SmallPopulation':
            j = cities.filter((city) => city.population < 1000000)
            return j;
        }
      })
      setFilteredCities(i.flat());
    } else {
      setFilteredCities([...cities]);
    }
  }

  return (
    <>
      <div className='thirdPageContainer'>
        <div className='filterButtonContainer'>
          {filters.map((category, index) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              key={index}
            >
              {category}
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
    </>
  )
} 