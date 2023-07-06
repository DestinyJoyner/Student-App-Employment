import { useState, useEffect } from "react";
import axios from "axios";
import StudentCard from "../StudentCard/StudentCard";
import "./StudentCardList.scss"

function StudentCardList() {
const [studentData, setStudentData] = useState([])

useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students")
    .then(({data}) => setStudentData(data.students))
    .catch(err => console.log(err))
},[])
    return (
        <div className="student-card-list-container">
           {
            studentData.map(el => <StudentCard
                key= {el.id} 
                obj = {el} />)
           }
        </div>
    );
}

export default StudentCardList;