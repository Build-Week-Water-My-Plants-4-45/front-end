import React from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
//  import { Marginer } from "../marginer"

export function LoginForm(props) {
    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
        </FormContainer>
         {/* <Marginer direction="vertical" margin={5} /> */}
         <MutedLink href="#">Forget your password?</MutedLink>
            {/* <Marginer direction="vertical" margin="1em" /> */}
            <SubmitButton type="submit"> Sign in </SubmitButton>
            {/* <Marginer direction="vertical" margin="1em" /> */}
            <MutedLink href="#">Dont't have an account? <BoldLink href="/sign-up" >Signup</BoldLink></MutedLink>
    </BoxContainer>
}