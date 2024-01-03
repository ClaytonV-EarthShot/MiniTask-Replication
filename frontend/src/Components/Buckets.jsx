export default function Buckets({bucketItem}) {

  let backgroundColor = bucketItem.backgroundColor;
  
  return (
    <>
      <div className='bucketWrapper' style={{backgroundColor: backgroundColor}}>
        <h3>{bucketItem.title}</h3>
        <p className='boWrapperBolded'>{bucketItem.boldedFact}</p>
        <p>Globally, 1 in 3 &#8800; safe drinking water, mostly &#8800; LDC's.</p>
        <div className='boBubblesWrapper'>
          <div className="boBubbles"><p>HIGH...</p></div>
          <div className="boBubbles"><p>HIGH...</p></div>
          <div className="boBubbles"><p>HIGH...</p></div>
        </div>
      </div>
    </>
  )
}