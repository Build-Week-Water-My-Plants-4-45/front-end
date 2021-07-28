import styled from "styled-components";
import { AccountBox } from "./components/marginer";
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Plant from './components/Plant';

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
    <AccountBox />
    
      <Switch>

        <Route path='/sign-up'>
          <Signup />
        </Route>
  
          //Plant route will change to dynamic route based on user, and plant id.
        <Route path='/plant'>
          <Plant />
        </Route>
  
      </Switch>
  
  </AppContainer>
}

export default App;
