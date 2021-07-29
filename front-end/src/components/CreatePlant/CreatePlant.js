import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
//import { axiosWithAuth } from '../authorization/axiosWithAuth.js';
import styled from "styled-components";

const initialPlant = {
    nickname: '',
    species: '',
    h2o_frequency: '',
    image: '',
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  align-items: center;
  label {
    margin-top: 2rem;
    font-size: 2rem;
  }
  input {
    width: 30rem;
    padding: 1rem 0.25rem;
    border-radius: 0.5rem;
    font-size: 2rem;
  }
`

const SubmitButton = styled.button`
  width: 20rem;
  border: none;
  padding: 1.5rem 0.5rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  transition: all, 300ms ease-in;
  &:hover {
    background: rgba(43, 48, 58, 0.9);
    transition: all, 300ms ease-in;
    color: white;
  }
  &:active {
    background: orange;
  }
`

export const CreatePlant = (props) => {
    const [plant, setPlant ] = useState(initialPlant);
    
    const create = e => {
        e.preventDefault();
        // axiosWithAuth()
        //   .post("dummydata", plant)
        //   .then(res => props.history.push('/plants'))
        //   .catch(err => console.log(err));
      }

    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value,
        })
    }

    return (
    <Form onSubmit={e => create(e)}>
      <h2>Create your plant!</h2>
      <label>Name </label>
      <input
        type="text"
        name="nickName"
        value={plant.nickName}
        onChange={handleChange}
      />

      <label>Species </label>
      <input
        type="text"
        name="species"
        value={plant.species}
        onChange={handleChange}
      />

      <label>H20frequency </label>
      <input
        type="number"
        name="h2oFrequency"
        value={plant.h2oFrequency}
        onChange={handleChange}
      />

      <label>Image </label>
      <input
        type="text"
        name="image"
        value={plant.image}
        onChange={handleChange}
      />

      <SubmitButton>Create Plant</SubmitButton>
    </Form>
    )
}