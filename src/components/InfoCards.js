import React from "react"
import ReactDOM from "react-dom"
import Cards from "./Cards"

function infoCards(){
    return(
       <div className="displaycards">
           <Cards />
           <Cards />
           <Cards />
       </div> 
    )
}

export default infoCards