import React from "react";
import styled from "styled-components";

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
    const { createPlantFormValues, updateCreatePlantForm, submitCreatePlantForm } = props;
    console.log(submitCreatePlantForm);

    return (
    <Form>
      <h2>Create your plant!</h2>
      <label>Name </label>
      <input
        type="text"
        name="nickname"
        value={createPlantFormValues.nickname}
        onChange={updateCreatePlantForm}
      />

      <label>Species </label>
      <input
        type="text"
        name="species"
        value={createPlantFormValues.species}
        onChange={updateCreatePlantForm}
      />

      <label>H20frequency </label>
      <input
        type="text"
        name="h2oFrequency"
        value={createPlantFormValues.h2oFrequency}
        onChange={updateCreatePlantForm}
      />

      <label>Image </label>
      <input
        type="text"
        name="img"
        value={createPlantFormValues.image}
        onChange={updateCreatePlantForm}
      />

      <SubmitButton onClick={submitCreatePlantForm}>Create Plant</SubmitButton>
    </Form>
    )
}