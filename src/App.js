import './App.css';
import Navbar from './Navbar';
import Home from './Home'

function App() {
  const date = new Date();
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{ date.toDateString() }</h1>
        <Home />
        </div>
    </div>
  );
}

export default App;
