import BadOutcomeTwo from "../Components/BadOutcomeTwo";
import Map from "../Components/Map";
import BucketsTwo from "../Components/BucketsTwo";

const bucketList = {
  bucketOne: {
    title: '🌳Tree 1.1 & ☂UMBRELLA 1.1',
    boldedFact: '40m in Ethiopia.',
    subtext: `Causing xx deaths, YY reduction in QALY's, ZZ $ cost.`,
    bubbleFactOne: 'High...',
    bubbleFactTwo: 'High...',
    bubbleFactThree: 'High...',
    bubbleColorOne: '#3e7d4f',
    bubbleColorTwo: '#3e7d4f',
    bubbleColorThree: '#3e7d4f',
    backgroundColor: '#49a0f8'
  },
  bucketTwo: {
    title: '🌳Tree 1.2 & ☂UMBRELLA 1.2',
    boldedFact: '32m in Afghanistan',
    subtext: `Causing xx deaths, YY reduction in QALY's, ZZ $ cost.`,
    bubbleFactOne: 'MED SOLVABILITY',
    bubbleFactTwo: 'MED OPPORTUNITY',
    bubbleFactThree: 'HIGH IMPACT',
    bubbleColorOne: '#bba142',
    bubbleColorTwo: '#bba142',
    bubbleColorThree: '#3e7d4f',
    backgroundColor: '#49a0f8'
  },
  bucketThree: {
    title: '🌳Tree 1.3 & ☂UMBRELLA 1.3',
    boldedFact: '163m in India.',
    subtext: `Causing xx deaths, YY reduction in QALY's, ZZ $ cost.`,
    bubbleFactOne: 'High...',
    bubbleFactTwo: 'High...',
    bubbleFactThree: 'High...',
    bubbleColorOne: '#3e7d4f',
    bubbleColorTwo: '#3e7d4f',
    bubbleColorThree: '#3e7d4f',
    backgroundColor: '#49a0f8'
  },
}

export default function Second() {
  return (
    <>
      <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <BadOutcomeTwo></BadOutcomeTwo>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Map></Map>
        </div>
        <div style={{display: 'flex', width: '100%', justifyContent: 'space-evenly'}}>
          {Object.values(bucketList).map((value) => {
            return <BucketsTwo bucketItem={value}/>;
          })}
        </div>
      </div>
    </>
  )
}