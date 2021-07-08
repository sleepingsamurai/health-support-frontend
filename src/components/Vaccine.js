import React from "react"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar";
import {useState, useEffect} from "react"
import VaccineSlotItem from "./VaccineSlotItem";

function Vaccine(){

    const [arr, setarr] = useState([])
    const [hospital, sethospital] = useState()
    const [req, setreq] =useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/hospital-list/',{
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token 3d12146fd1fcd94ccdd96f2b13ddcb3c4bbfb49f'
            }
        }).then(response => response.json())
        .then(response => setarr(response))
        .catch(error => console.log(error))
    },[])

    useEffect(() => {
            fetch(`http://127.0.0.1:8000/api/hospital-vaccine-slot/${hospital}/`,{
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token 3d12146fd1fcd94ccdd96f2b13ddcb3c4bbfb49f'
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
                    <h1>Vaccine Slots</h1>
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
                    <VaccineSlotItem data={i} />
                )):<div className="hospitalitem">
                <h2>none</h2>
            </div>}
            </div>
        </div>       
    )
}

export default Vaccine;