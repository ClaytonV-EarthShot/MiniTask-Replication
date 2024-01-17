import { useState, useEffect } from 'react';

export default function InfoBoxModal({city, visibility}) {

  return (
    <>
      <div className='infoBoxModalWrapper' style={{
        visibility: visibility
      }}>
        <div className='infoBoxModalContainer'>
          <div className='modalHeader'>
            <div className='modalTitleContainer'>
              <div style={{width: '55.5%', display:'flex', justifyContent: 'flex-end'}}>
                {city.name}
              </div>
              <div style={{width: '42%', display: 'flex', justifyContent: 'flex-end'}}>
                <button className='exitButton'>X</button>
              </div>
            </div>
            <div className='modalButtonContainer'>
              <button className='modalButton'></button>
              <button className='modalButton'></button>
              <button className='modalButton'></button>
              <button className='modalButton'></button>
              <button className='modalButton'></button>
            </div>
          </div>
          <div className='modalContent'>
            <div>Modal Content</div>
          </div>
        </div>
      </div>
    </>
  )
}