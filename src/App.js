import logo from "./dictionary-search-logo.png"
import './App.css';

function App() {
  return (
    <div className="App">
       <header className="App-header">
          <img src={logo} className="Dictionary-logo" alt="logo" /><br />
          <h1 className="text-header">
            Dictionary Search
          </h1>
       </header>
    </div>
  );
}

export default App;
