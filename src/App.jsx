import Player from "./components/player"


function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player name="PLayer1" symbol="X"/>
         <Player name="PLayer2" symbol="O"/>
        </ol>
      </div>
    </main>
  )
}

export default App
