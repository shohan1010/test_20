import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route path='/hi'>
              <div>
                <h1>Hellow</h1>
              </div>
            </Route>
          </Switch>
        </Router>



    </div>
  );
}

export default App;
