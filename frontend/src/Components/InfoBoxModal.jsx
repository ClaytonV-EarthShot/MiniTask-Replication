export default function InfoBoxModal() {
  
  return (
    <>
      <div className='infoBoxModalWrapper'>
        <div className='infoBoxModalContainer'>
          <div className='modalHeader'>
            <div className='modalTitleContainer'>
              Modal Title
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