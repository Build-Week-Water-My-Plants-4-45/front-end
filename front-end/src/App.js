import './App.css';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">

      <Switch>

        <Route path='/sign-up'>
          <Signup />
        </Route>

      {/* <Route path='/'>
        <Signin />
      </Route> */}
      </Switch>
    </div>
  );
}

export default App;
