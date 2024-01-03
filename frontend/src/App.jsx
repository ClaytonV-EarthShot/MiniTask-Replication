import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BadOutcome from './Components/BadOutcome';
import Buckets from './Components/Buckets';
import Second from './Pages/Second';

// bucketList Object created to repliate API data
const bucketList = {
  bucketOne: {
    title: '🌳Bucket #1',
    boldedFact: '30% = food & ag.',
    bubbleFact: '{xxx}...',
    backgroundColor: 'red'
  },
  bucketTwo: {
    title: '🌳Bucket #2',
    boldedFact: '10% = healthcare.',
    bubbleFact: '{xxx}...',
    backgroundColor: 'green'
  },
  bucketThree: {
    title: '🌳Bucket #3',
    boldedFact: '25% = water.',
    bubbleFact: '{xxx}...',
    backgroundColor: 'orange'
  },
  bucketFour: {
    title: '🌳Bucket #4',
    boldedFact: '25%= energy.',
    bubbleFact: '{xxx}...',
    backgroundColor: 'purple'
  },
  bucketFive: {
    title: '🌳Bucket #5',
    boldedFact: '3% = housing.',
    bubbleFact: '{xxx}...',
    backgroundColor: 'pink'
  },
  bucketSix: {
    title: '🌳Bucket #6',
    boldedFact: '5% = environment.',
    bubbleFact: '{xxx}...',
    backgroundColor: 'yellow'
  },
  bucketSeven: {
    title: '🌳Bucket #7',
    boldedFact: '2% = economic.',
    bubbleFact: '{xxx}...',
    backgroundColor: 'blue'
  }
}

function App() {
  return (
    <div className="App">
      <div style={{height: '100vh'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <BadOutcome></BadOutcome>
        </div>
        <div style={{display: 'flex', width: '100%', position: 'absolute', bottom: '0', justifyContent: 'space-evenly'}}>
          {Object.values(bucketList).map((value) => {
            return <Buckets bucketItem={value}/>;
          })}
        </div>
      </div>
      <div style={{height: '100vh'}}>
        <Route path='/second' element={<Second />}/>
      </div>
    </div>
  );
}

export default App;
