import { useState } from "react"

export default function Player({ name, symbol }) {

    const [isEditing, sIsEditing] = useState(false)

    let dCode;  
    
    if(!isEditing){
           dCode = <span className="player-name">{name}</span>
        }else{
            dCode = <input type="text" required/>
        }
     
    function handleClick(){
      sIsEditing(true)
    }
      
    return (
        <li id="player-name">
            <span className="player">
                 {dCode}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>Edit</button>
        </li>
    )
}