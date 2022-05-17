import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home';

function App() {
  return (
    <Router>
      <><Home/></>
      <div className='main'>
        <Routes>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/read" element={<Read/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
