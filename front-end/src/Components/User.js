import React from 'react';
import { Link } from 'react-router-dom';
import Plant from './Plant';
import { dummyData } from './userDummyData'; //For now importing dummy data to pass as props.  It's in a sepreate file to help with component readibility.
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  width: 90%;
  margin: 3rem auto;
  padding: 10px;
  background-color: #b5651d;
  color: #000;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #666633;
    color: #fff;
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 50%;
  margin: 10px 10px 20px;
  padding: 15px;
  background-color: #fff;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;


export default function User(props) {
    const i = 0;
    return (
        <Card>
        <div>
            <div className='user-header'>
                <h2>{dummyData.users[i].username}</h2>
                <Link to='/create-plant'>Add a Plant</Link>
            </div>

            <div>
                <h3>Hello {dummyData.users[i].username}!  Do your plants need watered?</h3>
                <div className='plants-list'>
                    {
                        dummyData.users[i].plants.length > 1 
                        ?
                        dummyData.users[i].plants.map((plant, index) => <Plant key={index} nickname={plant.nickname} species={plant.species} img={plant.img} h2oFrequency={plant.h2oFrequency}/>)
                        :
                        <Button>Click here to add a Plant!</Button>
                    }
                </div>
            </div>
        </div>
        </Card>
    )
}