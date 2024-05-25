import { useState } from "react"

export default function Player({ name, symbol }) {

    const [playerName, sPlayerName] = useState(name)
    const [isEditing, sIsEditing] = useState(false)

    let dCode;

    function handleChange(event) {
        sPlayerName(event.target.value)
    }

    if (!isEditing) {
        dCode = <span className="player-name">{playerName}</span>
    } else {
        dCode = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    function handleClick() {
        sIsEditing((editing) => !editing) //better this way
    }

    return (
        <li id="player-name">
            <span className="player">
                {dCode}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}