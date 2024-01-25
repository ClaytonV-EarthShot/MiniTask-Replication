export default function InfoBox({countryName, countryPopulation, countryLDC, countryNumber}) {

  const population = countryPopulation.toLocaleString('en', {useGrouping: true});

  if(countryLDC !== '') {
    countryLDC = 'LDC'
  }
  
  return (
    <>
      <div className='infoBoxContainer'>
          <p className='infoTopLeft'>#{countryNumber}</p>
          <p className='infoTopRight'></p>
          <p className='infoCityName'>{countryName}</p>
          <p className='infoBottomLeft'>{population}</p>
          <p className='infoBottomRight'>{countryLDC}</p>
      </div>
    </>
  )
}


/* 

const imageName = `url('${bgImage}')`;

style={{
  backgroundImage: 
  `radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.4) 100%), 
  ${imageName}`,
}}

*/