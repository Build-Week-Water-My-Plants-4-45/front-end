import './App.css';
import { Route, Switch } from 'react-router-dom';
import Plant from './components/Plant';

function App() {

  //Plant route will change to dynamic route based on user, and plant id.
  return (
    <div className="App">

      <Switch>

        <Route path='/plant'>
          <Plant />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
