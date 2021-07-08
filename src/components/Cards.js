import React from "react"
import ReactDOM from "react-dom"
import {useState, useEffect} from "react"

function Cards(props){

    var [count, setcount] = useState(0)
    const [arr , setarr] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/vaccine-slot/${props.type.id}/`,{
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token 3d12146fd1fcd94ccdd96f2b13ddcb3c4bbfb49f'
            }
        }).then(response => response.json())
        .then(response => setarr(response))
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        var total=0;
        arr.map(i => (
            total += i.quantity
        ))
        setcount(total)
    })

    return(

        <div className="col-lg-4 card text-center">
            <h1>{props.type.name}</h1>
            <span>{count}</span>
        </div>
    )
}

export default Cards