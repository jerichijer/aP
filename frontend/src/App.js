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
    <div>
      <h1>Dataset Viewer</h1>
      <div>
        {data.map((student, index) => (
          <div key={index}>
            {Object.entries(student).map(([key, value]) => (
              <p key={key} >
                <span>{key.replace(/_/g, " ")}:</span>{" "}
                {value}
              </p>
            ))}
          </div>
        ))}
        </div>
    </div>
  );
}

export default App;
