import logo from "./dictionary-search-logo.png"
import Dictionary from "./Dictionary";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
       <header className="App-header">
          <img src={logo} className="Dictionary-logo" alt="logo" /><br />
          <h1 className="text-header">
            Dictionary Search
          </h1>
       </header>
       <main>
        <Dictionary />
       </main>
       <footer className="text-center">
        <small>
          code created by <a href="https://github.com/jpcreativeworks?tab=repositories">Jenn Bencriscutto</a> {' '}
         | repo on <a href="https://github.com/jpcreativeworks/dictionary-search.git">Github</a> {' '}
         | hosted on <a href="https://searchthedictionary.netlify.app/">Netlify</a>
         </small>
       </footer>
      </div>
    </div>
  );
}

export default App;
