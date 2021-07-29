import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
//  import { Marginer } from "../marginer"
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);
    const { signupFormValues, updateSignupForm, submitSignupForm } = props;

    return (
        <BoxContainer>
        <FormContainer>
            <Input type="text" name="username" placeholder="Full Name" value={signupFormValues.username} onChange={updateSignupForm}/>    
            <Input type="text" name="password" placeholder="Password" value={signupFormValues.password} onChange={updateSignupForm}/>
            <Input type="text" name="confirmPassword" placeholder="Confirm Password" value={signupFormValues.confirmPassword} onChange={updateSignupForm}/>
            <Input type="number" name="phoneNumber" placeholder="Phone Number" value={signupFormValues.phoneNumber} onChange={updateSignupForm}/>
        </FormContainer>
         {/* <Marginer direction="vertical" margin={10} /> */}
            <SubmitButton type="submit" onClick={submitSignupForm}> Signup </SubmitButton>
            {/* <Marginer direction="vertical" margin="1em" /> */}
            <MutedLink href="#">Already have an account? <BoldLink href="#" onClick={switchToSignin} >Signin</BoldLink></MutedLink>
    </BoxContainer>
    );
}