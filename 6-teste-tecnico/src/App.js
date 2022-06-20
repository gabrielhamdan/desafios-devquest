import './App.css';
import AppRoutes from './pages/routes'

function App() {
  return (
    <div className="App">
      <AppRoutes />
      {console.log("A wild user appears!")}
    </div>
  );
}

export default App;
