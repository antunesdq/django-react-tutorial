import loading from './gifs/loading.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-loading">
          <p> 
            Loading....
          </p>
        </div>
        <img src={loading} className="App-logo" alt="logo" />
     </header>
    </div>
  );
}

export default App;
