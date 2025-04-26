import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import DatasetViewer from './pages/DatasetViewer';
import About from './pages/About';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/data')
    .then(response => response.json())
    .then(json => setData(json));
  }, [])


  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to="/">Home</Link> | <Link to="/data">View Dataset</Link> | <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/data' element={<DatasetViewer />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
