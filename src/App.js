import Navbar from './Navbar';
import Home from './Home';
import Events from './Events';
import CreateEvent from './CreateEvent';
import EventDetails from './EventDetails';
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
            <Events />
          </Route>
          <Route exact path="/events/create">
            <CreateEvent />
          </Route>
          <Route exact path="/events/:id">
            <EventDetails />
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
