import { useState } from "react"

export default function Player({ name, symbol }) {

    const [isEditing, sIsEditing] = useState(false)

    let dCode;  
    
    if(!isEditing){
           dCode = <span className="player-name">{name}</span>
        }else{
            dCode = <input type="text" required value={name}/>
        }
     
    function handleClick(){
      sIsEditing(!isEditing)
    }
      
    return (
        <li id="player-name">
            <span className="player">
                 {dCode}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save": "Edit"}</button>
        </li>
    )
}