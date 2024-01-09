export default function InfoBox({cityName, bgImage, cityPopulation, citySize}) {
  
  const imageName = `url('${bgImage}')`
  const population = cityPopulation.toLocaleString('en', {useGrouping: true});
  
  return (
    <>
      <div className='infoBoxContainer' style={{
          backgroundImage: 
            `radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.4) 100%), 
            ${imageName}`,
        }}>
          <p className='infoTopLeft'></p>
          <p className='infoTopRight'></p>
          <p className='infoCityName'>{cityName}</p>
          <p className='infoBottomLeft'>{population}</p>
          <p className='infoBottomRight'>{citySize}<sup style={{fontSize:'0.6em'}}>2</sup></p>
      </div>
    </>
  )
}