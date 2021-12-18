import React, { useState } from "react";
import axios from "axios";


function AddStudent() {


    const [name, setName] = useState("");
    const [id, setId] = useState();
    const [des, setDes] = useState("");
    const [role, setRole] = useState("");
    const [parent_card, setParent_Card] = useState();
    const [time_duration, setTime_duration] = useState();
   // const [details, setDetails] = useState();
    const [mobile,setMobile] = useState("");
    const [landLine,setLandLine] = useState("");
    const [address,setAddress] = useState("");


    function  onMobileNumberChange(e){

        setMobile(e.target.value);
    }

    function  onLandLineNumberChange(e){
        
        setLandLine(e.target.value);
    }

    function onAddressChange(e){
        setAddress(e.target.value);

    }

    const details ={mobileNumber:`${mobile}`,landLineNumber:`${landLine}`,address:`${address}`}
    // console.log("details "+details);

    function sendData(e) {
        e.preventDefault();
        console.log("TIME ", time_duration);
        const newStudent = {
            name, id, des, role, parent_card, time_duration, details
        }

        axios.post("http://localhost:8080/student/add", newStudent).then(() => {
            alert("Student Added")


        }).catch((err) => {
            alert(err)
        })
        // console.log(details);
    }
 
  


    return (
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input type="number" className="form-control" id="id" onChange={(e) => {
                        setId(e.target.value);
                    }} />
                </div>

                <div className="form-group">

                    <label htmlFor="des">Description:</label>
                    <input type="text" className="form-control" id="des" onChange={(e) => {
                        setDes(e.target.value);
                    }} />
                </div>

                <div className="form-group">

                    <label htmlFor="role">Role:</label>
                    <input type="text" className="form-control" id="role" onChange={(e) => {
                        setRole(e.target.value);
                    }} />
                </div>

                <div className="form-group">

                    <label htmlFor="parent_card">Parent Card:</label>
                    <input type="text" className="form-control" id="parent_card" onChange={(e) => {
                        setParent_Card(e.target.value);
                    }} />&nbsp;&nbsp;
                </div>

                <div className="form-group">
                    <label htmlFor="time_duration">Date:</label>
                    <input type="date" id="time_duration" name="time_duration" onChange={(e) => {
                        setTime_duration(e.target.value);
                    }} />&nbsp;&nbsp;&nbsp;&nbsp;

                  
                    
                    <div className="form-row">
                    <label htmlFor="details">Details:</label>
                        <div className="col-7">
                            <input type="text" className="form-control" placeholder="Mobile Number" onChange={(e)=>{
                                onMobileNumberChange(e);
                            }}/>&nbsp;
                        </div>
                        <div className="col-7">
                            <input type="text" className="form-control" placeholder="Land Line Number" onChange={(e)=>{
                                onLandLineNumberChange(e);
                            }} />&nbsp;
                        </div>
                        <div className="col-7">
                            <input type="text" className="form-control" placeholder="Address" onChange={(e)=>{
                                onAddressChange(e);
                            }}/>&nbsp;
                        </div>
                    </div>&nbsp;
                    

                </div>

                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    )

}



export default AddStudent;