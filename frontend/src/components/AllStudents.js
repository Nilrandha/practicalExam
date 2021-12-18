import React, { useState, useEffect } from "react";
import axios from "axios";

function AllStudents() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        //const getStudents=()=>{

        axios.get("http://localhost:8080/student/").then((res) => {
            setStudents(res.data);
            //console.log(res.data);
        }).catch((err) => {
            alert(err.message);
        })

        //}

        //  getStudents();
    }, [])




    return (
        <div className="container">
            <h1>All Students</h1>
            {students.map(student => {
                return (

                    <div  key={student._id}>
                        {console.log(student)}

                        <div className="card"  style={{ width: '18rem',marginBottom:'10px' }}>
                            <div className="card-body">
                                <h5 className="card-title">ID: {student.id}</h5>
                                <h5 className="card-title">Name: {student.name}</h5>
                                <h6 className="card-title">Role: {student.role}</h6>
                                <h6 className="card-title">Parent Card: {student.parent_card}</h6>
                                <h6 className="card-title">Time Duration: {student.time_duration}</h6>
                                <h6 className="card-title">Mobile: {student.details[0].mobileNumber}</h6>
                                <h6 className="card-title">Parent Card: {student.details[0].landLineNumber}</h6>
                                <h6 className="card-title">Address: {student.details[0].address}</h6>

                                <p className="card-text">{student.des}.</p>
                                <button type="button" className="btn btn-danger">Delete</button>&nbsp;{/* */}
                                <button type="button" className="btn btn-warning">Update</button>
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default AllStudents;