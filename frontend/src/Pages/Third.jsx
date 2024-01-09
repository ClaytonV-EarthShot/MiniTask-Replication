import { useEffect, useState } from 'react';

import InfoBox from "../Components/InfoBox"

export default function Third() {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch('/api/cities');
      const json = await response.json()

      if (response.ok) {
        setCities(json);
      }
    }

    fetchCities();
  }, []);

  return (
    <>
      <div className='thirdPageContainer'>
        <div className='infoBoxWrapper'>
          {cities && cities.map((city) => (
            console.dir(city),
            <InfoBox 
              key={city._id}
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