import { useState } from "react"

export default function InfoBoxModal({city, visibility, closeModal}) {
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
                <div style={{width: '55.5%', display:'flex', justifyContent: 'flex-end'}}>
                  {city.name}
                </div>
                <div style={{width: '42%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                  <button className='exitButton' onClick={closeModal}>X</button>
                </div>
              </div>
              <div className='modalButtonContainer'>
                <button className={`modalButton ${tabOne}`} onClick={() => tabClicked('one')}></button>
                <button className={`modalButton ${tabTwo}`} onClick={() => tabClicked('two')}></button>
                <button className={`modalButton ${tabThree}`} onClick={() => tabClicked('three')}></button>
                <button className={`modalButton ${tabFour}`} onClick={() => tabClicked('four')}></button>
                <button className={`modalButton ${tabFive}`} onClick={() => tabClicked('five')}></button>
              </div>
          </div>
          <div className='modalContent'>
              <div>Modal Content</div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}