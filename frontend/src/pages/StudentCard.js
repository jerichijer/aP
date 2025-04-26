import React from 'react';
import './StudentCard.css';

function StudentCard({ student }) {
    return (
        <div className='student-card'>
            <h3>{student.student_id}</h3>
            <p><strong>Age: </strong>{student.age}</p>
            <p><strong>Gender: </strong>{student.gender}</p>
            <p><strong>Study Hours: </strong>{student.study_hours_per_day} hrs/day</p>
            <p><strong>Social Media Hours: </strong>{student.social_media_hours}</p>
            <p><strong>Hours on Netflix: </strong>{student.netflix_hours}</p>
            <p><strong>Part Time Job: </strong>{student.part_time_job}</p>
            <p><strong>Attendance Percentage: </strong>{student.attendance_percentage}</p>
            <p><strong>Hours of Sleep: </strong>{student.sleep_hours}</p>
            <p><strong>Diet Quality: </strong>{student.diet_quality}</p>
            <p><strong>Exercize Frequency: </strong>{student.exercize_frequency}</p>
            <p><strong>Parental Education Level: </strong>{student.parental_education_level}</p>
            <p><strong>Internet Quality: </strong>{student.internet_quality}</p>
            <p><strong>Mental Health Rating: </strong>{student.mental_health_rating}</p>
            <p><strong>Extracurricular Participation: </strong>{student.extracurricular_participation}</p>
            <p><strong>Exam Score: </strong>{student.exam_score}</p>
        </div>
    )
}

export default StudentCard;