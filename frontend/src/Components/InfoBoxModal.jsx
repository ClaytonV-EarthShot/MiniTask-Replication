import { useState } from "react"

export default function InfoBoxModal({country, visibility, closeModal}) {
  
  const [tabOne, setTabOne] = useState('clicked');
  const [tabTwo, setTabTwo] = useState('');
  const [tabThree, setTabThree] = useState('');
  const [tabFour, setTabFour] = useState('');
  const [tabFive, setTabFive] = useState('');

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
            <div className='modalHeader'>
              <div className='modalTitleContainer'>
                <div style={{width: '60%', display:'flex', justifyContent: 'flex-end', marginTop: '0.5em', fontSize: '1.5em'}}>
                  {country.name}
                </div>
                <div style={{width: '36%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                  <button className='exitButton' onClick={closeModal}>X</button>
                </div>
              </div>
              <div className='modalButtonContainer'>
                <button className={`modalButton ${tabOne}`} onClick={() => tabClicked('one')}>Information</button>
                <button className={`modalButton ${tabTwo}`} onClick={() => tabClicked('two')}>Environmental</button>
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
                    <div>
                      You're in tab two.
                    </div>
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

