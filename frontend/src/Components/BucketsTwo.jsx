export default function BucketsTwo({bucketItem}) {

  let backgroundColor = bucketItem.backgroundColor;
  
  return (
    <>
      <div className='bucketWrapper' style={{backgroundColor: backgroundColor, padding: '2em'}}>
        <h3 style={{fontSize: '2em', marginBottom: '0.4em'}}>{bucketItem.title}</h3>
        <p className='boWrapperBolded' style={{fontSize: '3em'}}>{bucketItem.boldedFact}</p>
        <p style={{fontSize: '2em'}}>{bucketItem.subtext}</p>
        <div className='greybox'>
          <p>problem profile.</p>
        </div>
        <div className='boBubblesWrapper'>
          <div className="boBubbles" style={{width: '17.95em'}}>
            <p className='bOTBubbleText' style={{backgroundColor: bucketItem.bubbleColorOne}}>
              {bucketItem.bubbleFactOne}
            </p>
          </div>
          <div className="boBubbles" style={{width: '17.95em'}}>
          <p className='bOTBubbleText' style={{backgroundColor: bucketItem.bubbleColorTwo}}>
              {bucketItem.bubbleFactTwo}
            </p>
          </div>
          <div className="boBubbles" style={{width: '17.95em'}}>
          <p className='bOTBubbleText' style={{backgroundColor: bucketItem.bubbleColorThree}}>
              {bucketItem.bubbleFactThree}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}