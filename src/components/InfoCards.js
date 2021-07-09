import React from "react"
import ReactDOM from "react-dom"
import Cards from "./Cards"
import {useState, useEffect} from "react"
import {useCookies} from 'react-cookie'

function InfoCards(){

    const [types, settypes] = useState([])
    const [token, settoken] =useCookies(['mytoken'])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/vaccine-type-list/',{
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token['mytoken']}`
            }
        }).then(response => response.json())
        .then(response => settypes(response))
        .catch(error => console.log(error))
    }, [])

    return(
       <div className="displaycards">
           {types.map((type,index) => {
               return <Cards key={index} type={type}/>
           })}
       </div> 
    )
}

export default InfoCards