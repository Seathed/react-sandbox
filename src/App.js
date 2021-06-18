import Navbar from './Navbar';
import Home from './Home';
import CreateEvent from './CreateEvent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const date = new Date();
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/calendar">
            <Home />
          </Route>
          <Route path="/events">
            <Home />
          </Route>
          <Route path="/create-event">
            <CreateEvent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
