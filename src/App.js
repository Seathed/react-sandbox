import Navbar from './Navbar';
import Home from './Home';
import CreateEvent from './CreateEvent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/calendar">
            <Home />
          </Route>
          <Route exact path="/events">
            <Home />
          </Route>
          <Route exact path="/events/create">
            <CreateEvent />
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
