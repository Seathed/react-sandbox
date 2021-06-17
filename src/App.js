import './App.css';

function App() {
  const date = new Date();
  return (
    <div className="App">
      <div className="content">
        <h1>{ date.toDateString() }</h1>
        </div>
    </div>
  );
}

export default App;
