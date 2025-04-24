import './App.css';
import React, { useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber"; // 3D Rendering

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/data')
    .then(response => response.json())
    .then(json => setData(json));
  }, [])


  return (
    <div className='min-h-screen bg-black p-6'>
      <h1 className='text-4xl font-bold text-center mb-8'>Dataset Viewer</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((student, index) => (
          <div key={index} className='bg-white rounded-xl shadow-lg p-6 border border-gray-200'>
            {Object.entries(student).map(([key, value]) => (
              <p key={key} className='mb-1 text-gray-700'>
                <span className='font-semibold capitalize'>{key.replace(/_/g, " ")}:</span>{" "}
                {value}
              </p>
            ))}
          </div>
        ))}
      </div>
        <div className='App'>
          <Canvas></Canvas>
        </div>
    </div>
  );
}

export default App;
