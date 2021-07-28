import React from "react";
import styled from "styled-components";
import { LoginForm } from "../accountBox/loginForm";

const BoxContainer = styled.div`
width: 500px;
min-height: 800px;
display: flex; 
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;

const TopContainer = styled.div`
width: 100%;
height: 250px;
display:flex;
flex-direction: column;
justify-content: space-around;
padding: 0 1.8em;
padding-bottom: 5em;
`;

const BackDrop = styled.div`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(10deg);
top: -290px;
left: -70px;
background: rgb(2,0,36);
background: linear-gradient(
56deg, 
rgba(2,0,36,1) 0%, 
rgba(9,121,45,1) 32%
);
`;

const HeaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const HeaderText = styled.h2`
font-size: 30px;
font-weight: 600;
line-height: 1.3;
color: #fff;
z-index: 10;
margin: 0;
`;
const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    z-index: 10;
    margin: 0;
    margin-top: 8px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8rem;
    justify-content: space-around;
`


export function AccountBox(props) {
    return <BoxContainer>
        <TopContainer>
            <BackDrop />
            <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign in to continue!</SmallText>
            </HeaderContainer>
        </TopContainer>
        <InnerContainer>
            <LoginForm />
        </InnerContainer>
    </BoxContainer>
}