import { useEffect, useState } from 'react';

import InfoBox from "../Components/InfoBox";
import SideNav from '../Components/SideNav';
import InfoBoxModal from '../Components/InfoBoxModal';

export default function Third() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState(cities);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [modalCity, setModalCity] = useState({});
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
    const fetchCities = async () => {
      const response = await fetch('/api/cities');
      // const countryResponse = await fetch('/api/countries');
      const bucketOneResponse = await fetch('/api/bucketone');
      const json = await response.json();
      // const countryJson = await countryResponse.json();
      const bucketOneJson = await bucketOneResponse.json();

      if (response.ok) {
        setCities(json);
        setFilteredCities(json);
      }

      if (bucketOneResponse.ok) {
        bucketOneJson.forEach((element) => console.log(element._id));
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
  }, [selectedFilters]);

  const filterCities = () => {
    if (selectedFilters.length > 0) {
      let i = cities;

      selectedFilters.forEach((filter) => {
        switch(filter) {
          case 'Large Population':
            i = i.filter((city) => city.population >= 1000000);
            break;
          case 'Small Population':
            i = i.filter((city) => city.population < 1000000);
            break;
          case 'Large Area':
            i = i.filter((city) => city.size >= 600);  
            break;
          case 'Small Area':
            i = i.filter((city) => city.size < 600);  
            break;
        }
      })
      setFilteredCities(i);
    } else {
      setFilteredCities([...cities]);
    }
  }

  const openModal = (city) => {
    setModalCity(city);
    setVisible(true);
  }

  return (
    <>
      <div className='thirdPageContainer'>
        
        <InfoBoxModal city={modalCity} visibility={isVisible} closeModal={() => setVisible(false)}/>
        
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
              <button className='infoBoxContainerButton'
              onClick={() => openModal(city)}>
                <InfoBox 
                  key={city._id}
                  cityNumber={index + 1}
                  cityName={city.name}
                  bgImage={city.imageLinkName}
                  cityPopulation={city.population}
                  citySize={city.size}
                />
              </button>
            ))}
          </div>    
        </div>
      </div>
    </>
  )
} 