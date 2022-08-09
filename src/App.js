import logo from './logo.svg';
import './App.css';
import getData from './getData';

function App() {
  console.log(getData)
  return (
    <div className="App">
      <getData/>
    </div>
  );
}

export default App;
