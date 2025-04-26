import React, { useEffect, useState } from 'react';
import StudentCard from './StudentCard';
import './DatasetViewer.css';

function DatasetViewer() {
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8000/api/data")
        .then((res) => res.json())
        .then((data) => {
            setStudents(data); // Updates students state with data
        })
        .catch((err) => console.log(err))
    }, []);



    return (
        <div className='card-container'>
            {students.map((student) => (
                <StudentCard key={student.student_id} student={student} />
            ))}
        </div>
    )
}

export default DatasetViewer;