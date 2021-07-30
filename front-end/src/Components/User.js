import React from 'react';
import { Link } from 'react-router-dom';
import Plant from './Plant';
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
    return (
        <Card>
          <div>
            {
                !props.currentUser ? <h2>Loading...</h2> :
            
            <div>
                <div className='user-header'>
                    <h2>{props.currentUser[0].username}</h2>
                    <Link to={`/user/${props.currentUser[0].id}/create-plant`}>Add a Plant</Link>
                </div>

                <div>
                    <h3>Hello {props.currentUser[0].username}!  Do your plants need watered?</h3>
                    <div className='plants-list'>
                        {
                            props.currentUser[0].plants.length > 1 
                            ?
                            props.currentUser[0].plants.map((plant, index) => <Link to={{pathname: `/plant/${plant.id}`, state: {plant: plant}}}><Plant key={index} nickname={plant.nickname} species={plant.species} img={plant.img} h2oFrequency={plant.h2oFrequency}/></Link>)
                            :
                            <Button>Click here to add a Plant!</Button>
                        } 
                    </div>

                </div>
            </div>
            }
          </div>
        </Card>
    )
}