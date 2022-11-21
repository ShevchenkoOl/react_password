import React, { Component } from 'react';
 
import FormField from './FormField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
 
class JoinForm extends Component {
 
  // initialize state to hold validity of form fields
  state = { fullname: false, email: false, password: false }
 
  // higher-order function that returns a state change watch function
  // sets the corresponding state property to true if the form field has no errors
  fieldStateChanged = field => state => this.setState({ [field]: state.errors.length === 0 });
 
  // state change watch functions for each field
  emailChanged = this.fieldStateChanged('email');
  fullnameChanged = this.fieldStateChanged('fullname');
  passwordChanged = this.fieldStateChanged('password');
 
  render() {
    const { fullname, email, password } = this.state;
    const formValidated = fullname && email && password;
 
    // validation function for the fullname
    // ensures that fullname contains at least two names separated with a space
    const validateFullname = value => {
      const regex = /^[a-z]{2,}(s[a-z]{2,})+$/i;
      if (!regex.test(value)) throw new Error('Fullname is invalid');
    };
 
    return
 
            // //Support Team
            // {/** Show the form button only if all fields are valid **/}
            // formValidated && Join 
 
            // {/** Render the fullname form field passing the name validation fn **/}
 
            // {/** Render the email field component **/}
 
            // {/** Render the password field component using thresholdLength of 7 and minStrength of 3 **/}
 
    
  }
 
}
 
export default JoinForm;
