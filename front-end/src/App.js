import './App.css';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { Route, Switch } from 'react-router-dom';
import Plant from './components/Plant';
import { CreatePlant }  from './components/CreatePlant/CreatePlant';

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
