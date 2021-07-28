import React from "react";
import { Link } from "react-router-dom"

export default function Signup (props) {
    return (
        <div className="signup-container">
            <h2>Signup</h2>


            {/* Values need to be set from state for this to be a controlled component.  State has not yet been declared.
                Submit button needs to call an onSubmit function.
                Inputs need an onChange handler to update state, state has not yet been declared*/}
            <form>
                <input type='text' placeholder='Username' />
                <input type='text' placeholder='Password'/>
                <input type='text' placeholder='Phone Number (555-555-5555)'/>

                <button>Sign Up</button>
            </form>
            <h3>Already have an account? <Link to='/sign-in'>Sign in</Link>.</h3>
        </div>
    )
}