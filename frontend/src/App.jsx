import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './Pages/First';
import Second from './Pages/Second';
import Third from './Pages/Third';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<First />}/>
          <Route path='/first' element={<First />}/>
          <Route path='/second' element={<Second />}/>
          <Route path='/third' element={<Third />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
