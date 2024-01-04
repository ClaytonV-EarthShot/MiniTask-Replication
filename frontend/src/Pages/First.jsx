import BadOutcome from "../Components/BadOutcome"
import Buckets from "../Components/Buckets"

export default function First() {

  // bucketList Object created to repliate API data
const bucketList = {
  bucketOne: {
    title: '🌳Bucket #1',
    boldedFact: '30% = food & ag.',
    bubbleFact: '{xxx}...',
    backgroundColor: '#b3a044'
  },
  bucketTwo: {
    title: '🌳Bucket #2',
    boldedFact: '10% = healthcare.',
    bubbleFact: '{xxx}...',
    backgroundColor: '#d04b44'
  },
  bucketThree: {
    title: '🌳Bucket #3',
    boldedFact: '25% = water.',
    bubbleFact: '{xxx}...',
    backgroundColor: '#49a0f8'
  },
  bucketFour: {
    title: '🌳Bucket #4',
    boldedFact: '25%= energy.',
    bubbleFact: '{xxx}...',
    backgroundColor: '#2c2708'
  },
  bucketFive: {
    title: '🌳Bucket #5',
    boldedFact: '3% = housing.',
    bubbleFact: '{xxx}...',
    backgroundColor: '#f19e38'
  },
  bucketSix: {
    title: '🌳Bucket #6',
    boldedFact: '5% = environment.',
    bubbleFact: '{xxx}...',
    backgroundColor: '#4ea938'
  },
  bucketSeven: {
    title: '🌳Bucket #7',
    boldedFact: '2% = economic.',
    bubbleFact: '{xxx}...',
    backgroundColor: '#7515f4'
  }
}

  return (
    <>
      <div className='firstPageContainer'>
        <div className='firstPageBOContainer'>
          <BadOutcome></BadOutcome>
        </div>
        <div className='firstPageBucketsContainer'>
          {Object.values(bucketList).map((value) => {
            return <Buckets bucketItem={value}/>;
          })}
        </div>
      </div>
    </>
  )
}