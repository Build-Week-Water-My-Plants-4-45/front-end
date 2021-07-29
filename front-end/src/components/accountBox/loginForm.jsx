import React, { useContext } from "react";
import { 
    BoldLink, 
    BoxContainer, 
    FormContainer, 
    Input, 
    MutedLink, 
    SubmitButton 
} from "./common";
//  import { Marginer } from "../marginer"
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);
    const { loginFormValues, updateLoginForm, fakeAuth } = props;

    return <BoxContainer>
        <FormContainer>
            <Input name="username" value={loginFormValues.username} onChange={updateLoginForm} type="text" placeholder="Username" />
            <Input name="password" value={loginFormValues.password} onChange={updateLoginForm} type="text" placeholder="Password" />
        </FormContainer>
         {/* <Marginer direction="vertical" margin={10} /> */}
         <MutedLink href="#">Forget your password?</MutedLink>
            {/* <Marginer direction="vertical" margin="1em" /> */}
            <SubmitButton type="submit" onClick={fakeAuth}> Sign in </SubmitButton>
            {/* <Marginer direction="vertical" margin="1em" /> */}
            <MutedLink href="#">Dont't have an account?{" "} <BoldLink href="#" onClick={switchToSignup} >Signup</BoldLink></MutedLink>
    </BoxContainer>
}