import React from "react"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar";
import {useState, useEffect} from "react"
import {useCookies} from 'react-cookie'


function Bed(){

    const [arr, setarr] = useState([])
    const [hospital, sethospital] = useState()
    const [req, setreq] = useState([])
    const [token, settoken] =useCookies(['mytoken'])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/hospital-list/',{
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token['mytoken']}`
            }
        }).then(response => response.json())
        .then(response => setarr(response))
        .catch(error => console.log(error))
    },[])

    useEffect(() => {
            fetch(`http://127.0.0.1:8000/api/hospital-bed/${hospital}/`,{
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token['mytoken']}`
            }
            }).then(response => response.json())
            .then(response => setreq(response))
            .catch(error => console.log(error))
    },[hospital])

    function handleChange(event){
        sethospital(event.target.value)
    }

    return(
        <div className="row">
            <div className="sidebardiv">
                <Sidebar />
            </div>
            <div className="displaycardsdiv">
                <div className="formcontain">
                    <h1>Available Beds</h1>
                    <form>
                        <label for="hospitals"> <h3>Select Hospital:</h3></label>
                        <select id="hospitals" name="hospitals" value={hospital} onChange={handleChange}>
                        <option value="">Select</option>
                            {arr.map(i => (
                                <option value={i.id}>{i.name}</option>
                            ))}
                        </select>
                    </form>
                </div>
                {req.length?req.map(i => (
                    <div className="hospitalitem">
                       <h2>{i.bed_code}</h2>
                    </div>
                )):<div className="hospitalitem">
                <h2>none</h2>
            </div>}
            </div>
        </div>       
    )
}

export default Bed;