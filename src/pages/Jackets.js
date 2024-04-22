import react from "react"
import {useEffect, useState} from "react"
import {useLocation, useParams} from "react-router-dom"

function Jackets(props){
    let location = useParams();
    console.log("--------")
    console.log(location)
    console.log("--------")
    const [char, setChar] = useState("")

useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${location.productid}`)
    .then(data=>data.json())
    .then(cleanedData=>{
        setChar(cleanedData.name)
    })
},[])

  var newNumber = 0
    function changeNumber(){
      newNumber = props.number + 3
      props.setTheNumber(newNumber)
    }
    
    return(
      <div>
        <h1>Jacket with pokemon of {char}</h1>
      </div>
    )
  }

export default Jackets