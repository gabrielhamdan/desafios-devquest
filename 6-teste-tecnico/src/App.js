import './App.css';
import PokeDisplay from './components/pokeDisplay/pokeDisplay'

function App() {
  return (
    <div className="App">
      <PokeDisplay />
      {console.log("A wild user appears!")}
    </div>
  );
}

export default App;
