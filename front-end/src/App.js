import './App.css';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { Route, Switch, useHistory } from 'react-router-dom';
import { CreatePlant }  from './components/CreatePlant/CreatePlant';
import IndividualPlant from "./components/IndividualPlant";
import User from './components/User';
import React, { useState, useEffect } from 'react';
import { dummyData } from './components/userDummyData';
import { Navbar } from "./components/navbar"
import  Contact  from './components/contact'


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(15, 15, 15, 1);
  color: #fff;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const SomeContent = styled.h2`
  color: #fff;
`;

const defaultLoginForm = {
  username: '',
  password: ''
}

const defaultSignupForm = {
  username: '',
  password: '',
  confirmPassword: '',
  phoneNumber: ''
}

const defaultCreatePlantForm = {
  nickname: '',
  species: '',
  h2oFrequency: '',
  img: ''
}

function App() {
  const [users, setUsers] = useState(dummyData);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginFormValues, setLoginForm] = useState(defaultLoginForm);
  const [signupFormValues, setSignupForm] = useState(defaultSignupForm);
  const [createPlantFormValues, setCreatePlantForm] = useState(defaultCreatePlantForm);

  const history = useHistory();

  function updateLoginForm(event) {
    const {value, name} = event.target;

    setLoginForm({...loginFormValues, [name]: value})
  }

  function updateSignupForm(event) {
    const {value, name} = event.target;

    setSignupForm({...signupFormValues, [name]: value})
  }

  function updateCreatePlantForm(event) {
    const {value, name} = event.target;

    setCreatePlantForm({...createPlantFormValues, [name]: value})
    console.log(createPlantFormValues);
  }

  function submitCreatePlantForm(e) {
    console.log(currentUser);
    e.preventDefault();
    const plants = currentUser[0].plants;
    const newPlant = {
      nickname: createPlantFormValues.nickname,
      species: createPlantFormValues.species,
      h2oFrequency: createPlantFormValues.h2oFrequency,
      img: createPlantFormValues.img,
      id: 3
    }
    const currentUserCopy = {...currentUser}
    currentUserCopy[0].plants = [...plants, newPlant]

    setCurrentUser(currentUserCopy);
    console.log(currentUser);
  }

  function submitSignupForm(){
    if(signupFormValues.password === signupFormValues.confirmPassword) {
      const newUser = {
        username: signupFormValues.username,
        password: signupFormValues.password,
        phoneNumber: signupFormValues.phoneNumber,
        id: 3,
        plants: []
      }

      setUsers({...users, newUser})
      setCurrentUser([newUser]);
    } else {
        alert('Passwords do not match.');
    }
  }

  function fakeAuth() {
    const username = loginFormValues.username;
    const password = loginFormValues.password;

    const correctUser = users.filter(user => {
      if(user.username === username && user.password === password) {
        return user;
      } else {
        return false;
      }
    })

    if(correctUser.length < 1) {
      alert('Incorrect username or password');
    } else {
      setCurrentUser(correctUser);
    }
  } 

  useEffect(() => {
    if(currentUser) {
      history.push(`/user/${currentUser[0].id}`)
    }
  },[currentUser])

  return <AppContainer>
    
    <Navbar />
      <InnerContainer>
        <SomeContent>Plant Light!</SomeContent>
      </InnerContainer>
     

    {/* <Nav /> */}
      <Switch>

        <Route path='/user/:userId/create-plant'>
          <CreatePlant createPlantFormValues={createPlantFormValues} updateCreatePlantForm={updateCreatePlantForm} submitCreatePlantForm={submitCreatePlantForm}/>
        </Route>

        <Route path='/user/:userId'>
          <User currentUser={currentUser}/>
        </Route>

        <Route path='/plant/:plantId'>
          <IndividualPlant />
        </Route>

        <Route exact path='/'>
          <AccountBox loginFormValues={loginFormValues} updateLoginForm={updateLoginForm} fakeAuth={fakeAuth} signupFormValues={signupFormValues} updateSignupForm={updateSignupForm} submitSignupForm={submitSignupForm}/>
        </Route>

        <Route path='/contact' >
          <Contact />
        </Route>

        {/* <Route 
        path="/profile" >
        <UserProfile /> 
        </Route> */}
      </Switch>

  </AppContainer>
   
  
}

export default App;