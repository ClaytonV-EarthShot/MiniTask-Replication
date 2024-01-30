import { useState, useEffect } from "react";
import DoughnutComp from "./DoughnutComp";
import BarComp from "./BarComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faTractor } from '@fortawesome/free-solid-svg-icons';

export default function InfoBoxModal({country, visibility, closeModal}) {
  
  const imageName = `url('https://images.pexels.com/photos/19872/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`;
  
  const [tabOne, setTabOne] = useState('clicked');
  const [tabTwo, setTabTwo] = useState('');
  const [tabThree, setTabThree] = useState('');
  const [tabFour, setTabFour] = useState('');
  const [tabFive, setTabFive] = useState('');
  const [bucketOne, setBucketOne] = useState();

  useEffect(() => {
    const fetchBucketOne = async () => {
      const response = await fetch(`/api/bucketone/${country.bucketOne}`);
      const json = await response.json();

      if (response.ok) {
        setBucketOne(json);
      }
    }

    fetchBucketOne();
  }, []);

  console.log('This is the bucketOne object:');
  console.dir(bucketOne);

  const handleChildElementClick = (e) => {
    e.stopPropagation()
 }

  const tabClicked = (tab) => {
    switch(tab) {
      case 'one':
        setTabOne('clicked');
        setTabTwo('');
        setTabThree('');
        setTabFour('');
        setTabFive('');
        break;
      case 'two':
        setTabOne('');
        setTabTwo('clicked');
        setTabThree('');
        setTabFour('');
        setTabFive('');
        break;
      case 'three':
        setTabOne('');
        setTabTwo('');
        setTabThree('clicked');
        setTabFour('');
        setTabFive('');
        break;
      case 'four':
        setTabOne('');
        setTabTwo('');
        setTabThree('');
        setTabFour('clicked');
        setTabFive('');
        break;
      case 'five':
        setTabOne('');
        setTabTwo('');
        setTabThree('');
        setTabFour('');
        setTabFive('clicked');
        break;
    }
  }

  return (
    <>
    {visibility && (
      <div className='infoBoxModalWrapper' onClick={closeModal}>
          <div className='infoBoxModalContainer' onClick={(e) => handleChildElementClick(e)}>
            <div className='modalHeader' style={{
                backgroundImage: 
                  `radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.7) 100%), 
                  ${imageName}`
            }}>
              <div className='modalTitleContainer'>
                <div style={{display: 'flex', flexDirection: "column", marginTop: '0.5em', fontSize: '1.5em', textAlign: 'center', paddingLeft: '10em', marginRight: '7em'}}>
                  <div>
                    {country.country}
                  </div>
                  <div>
                    {country.region}
                  </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end',alignItems: 'flex-start'}}>
                  <button className='exitButton' onClick={closeModal}>X</button>
                </div>
              </div>
              <div className='modalButtonContainer'>
                <button className={`modalButton ${tabOne}`} onClick={() => tabClicked('one')}>Information</button>
                <button className={`modalButton ${tabTwo}`} onClick={() => tabClicked('two')}>Food & Agriculture</button>
                <button className={`modalButton ${tabThree}`} onClick={() => tabClicked('three')}>Humanitarian</button>
                <button className={`modalButton ${tabFour}`} onClick={() => tabClicked('four')}>Category</button>
                <button className={`modalButton ${tabFive}`} onClick={() => tabClicked('five')}>Category</button>
              </div>
          </div>
          <div className='modalContentWrapper'>
              <div className='modalContentContainer'>
                <div className='modalContent'>
                  {tabOne === 'clicked' &&
                    <>
                      <div className='infoTabContent'>
                        <div>
                          <p>{country.incomeClassification}</p>
                        </div>
                        <div>
                        
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                      </div>
                      <div className='infoTabMapLinks'>
                        
                      </div>
                    </>
                  }
                  {tabTwo === 'clicked' &&
                    <>
                      <div className='foodAndAgrWrapper'>
                        <h1>What Nutrients Is The Public Lacking?</h1>
                        <div className='fAANutrition'>
                          <span>
                            <DoughnutComp />
                          </span>
                          <div className='fAANutritionFactList'>
                            <div className='fAANutritionFactPositive'>
                              <p className='fAANutritionFactItem'>🟢 Lowest deficieny is: </p>
                              <p className='fAANutritionFactItem'>🟢 Lowest deficieny is: </p>
                              <p className='fAANutritionFactItem'>🟢 Lowest deficieny is: </p>
                            </div>
                            <div className='fAANutritionFactNegative'>
                              <p className='fAANutritionFactItem'>🔴 Highest deficiency is: </p>
                              <p className='fAANutritionFactItem'>🔴 Highest deficiency is: </p>
                              <p className='fAANutritionFactItem'>🔴 Highest deficiency is: </p>
                            </div>
                          </div>
                        </div>
                        <h1>Irrigated vs. Rainfed Crops</h1>
                        <div className='fAACrops'>
                          <div className='fAACropFacts'>
                            <div className='fAACropFactItem'>
                              <FontAwesomeIcon icon={faCloudRain} className='fAACropIcon' style={{color: 'rgb(101, 206, 241)'}}/>
                              <p>In {country.country}, the crops are primarily rainfed</p>
                            </div>
                            <div className='fAACropFactItem'>
                              <FontAwesomeIcon icon={faTractor} className='fAACropIcon' style={{color: 'rgb(241, 241, 101)'}}/>
                              <p>Most Irrigated Crop: </p>
                            </div>
                            <div className='fAACropFactItem'>
                              <FontAwesomeIcon icon={faCloudRain} className='fAACropIcon' style={{color: 'rgb(101, 206, 241)'}}/>
                              <p>Most Rainfed Crop: </p>
                            </div>
                          </div>
                          <span>
                            <BarComp />
                          </span>
                        </div>
                        <div className='fAAAgriculutureFacts'>
                          <table>
                            <tr>
                              <td>Cultivatable Land</td>
                              <td>527,714,000.00 ha</td>
                            </tr>
                            <tr>
                              <td>Fertilizer Use Per Hectare of Land</td>
                              <td>393.22 kg</td>
                            </tr>
                            <tr>
                              <td>Agricultural Water Withdrawl</td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>Total Factor Productivity</td>
                              <td>0.97</td>
                            </tr>
                            <tr>
                              <td>Public Spenditure on Agriculture (Percent of GDP)</td>
                              <td>527,714,000.00 ha</td>
                            </tr>
                            <tr>
                              <td>Soil Erosion</td>
                              <td>No Data Recorded</td>
                            </tr>
                          </table>
                        </div>
                        <div className="fAABadOutcome">
                          <h1>Bad Outcome: Malnutrition</h1>
                          <div className='fAABadOutcomeInfoWrapper'>
                            <div className='fAABadOutcomeInfo'>
                              <p>9% of the world are severly food insecure. This is 965 million people.</p>
                              <p>25% of the world moderately or severly food insecure. This is 1.9 billion people</p>
                              <p>8.9% of the world are undernourished</p>
                              <p>22% of children in the world that are less than 5 years old are stunted.</p>
                            </div>
                            <div className='fAABadOutcomeTableWrapper'>
                              <table>
                                <tr>
                                  <td>Prevalence of Undernourishment</td>
                                  <td>3.00%</td>
                                </tr>
                                <tr>
                                  <td>Prevalence of Stunting</td>
                                  <td>4.70%</td>
                                </tr>
                                <tr>
                                  <td>Prevalence of Wasting</td>
                                  <td>1.90%</td>
                                </tr>
                                <tr>
                                  <td>Underweight</td>
                                  <td>2.30%</td>
                                </tr>
                                <tr>
                                  <td>Severe Food Insecurity</td>
                                  <td>5.40%</td>
                                </tr>
                                <tr>
                                  <td>Micro and Macro Nutrient Deficiency</td>
                                  <td>8.40%</td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }
                  {tabThree === 'clicked' &&
                    <div>
                      You're in tab three.
                    </div>
                  }
                  {tabFour === 'clicked' &&
                    <div>
                      You're in tab four.
                    </div>
                  }
                  {tabFive === 'clicked' &&
                    <div>
                      You're in tab five.
                    </div>
                  }
                </div>
              </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}


/* 

 style={{
              backgroundImage: 
                `radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.7) 100%), 
                ${imageName}`
            }}

const imageName = `url('${city.imageLinkName}')`;
const mapName = `url('${city.mapLink}')`;

<div style={{backgroundImage: mapName, height: '20em', width: '30em', backgroundSize: 'cover', backgroundPosition: 'center'}}>
</div>

*/

