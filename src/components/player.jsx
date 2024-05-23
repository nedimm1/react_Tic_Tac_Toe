export default function Player({name, symbol}){
   return(
    <li id="player-name">
            <span className="player">
              <span className="player-name">{name}</span>
              <span className="player-symbol">{symbol}</span>
            </span>
          </li>
   )
}