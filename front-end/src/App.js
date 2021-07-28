import styled from "styled-components";
import { AccountBox } from "./components/marginer";
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Plant from './components/Plant';
import User from './components/User';
import CreatePlant from './components/CreatePlant/CreatePlant';

// Vital we setup state:  Need state to keep track of users and their plants, and that registering adds a new user to state.
// Need to ensure that creating a plant adds to the users plants list.  Make sure components are reciving props they need to render
// user data and plant data.  Edit / Delete plants comes last.

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return <AppContainer>
    
      <Switch>
        <Route path='/sign-up'>
          <Signup />
        </Route>

        <Route path='/user'>
          <User />
        </Route>

        <Route path='/create-plant'>
          <CreatePlant />
        </Route>
          
        <Route path='/plant'>
          <Plant />
        </Route>

        <Route path='/'>
          <AccountBox />
        </Route>
  
      </Switch>
  
  </AppContainer>
}

export default App;
