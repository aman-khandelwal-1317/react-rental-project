
import React, { Children } from "react" ;
import { useForm } from "react-hook-form" ;
import { ErrorMessage } from "@hookform/error-message" ;
import FormError from "./FormError" ;

const Error = ({children}) => 
<div className="alert alert-danger">
{children}
</div>

const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

const LoginForm = ({onSubmit}) => {

  
    const { register , handleSubmit , errors } = useForm() ;

    return(
<form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            ref={register({required: true , pattern:EMAIL_PATTERN})}
            name="email"
            type="email"
            className="form-control"
            id="email" />
           {
                errors.email &&
                <div className="alert alert-danger">
                    {
                        errors.email.type === "required" &&
                        <span>Email is Required !!</span>
                    }

                    { 
                        errors.email.type === "pattern" &&
                        <span> Not Valid Email !!</span>
                    }
                </div>
            }
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
           ref={
               register({
                   required: "Password is Required !!" , minLength: {value: 8 , message:"Minimum length must be 8 characters !! " }})}
           name="password"
            type="password"
            className="form-control"
            id="password" />
            {  /*
                errors.password &&
                <div className="alert alert-danger">
                    {
                        errors.password.type === "required" &&
                        <span>Password is Required !!</span>
                    }

                    { 
                        errors.password.type === "minLength" &&
                        <span>Minimum length must be 8 characters !!</span>
                    }
                </div>
                */  }
        
         <FormError errors={errors} name="password">
            {(message) => <p>{message}</p>}
         </FormError>

        </div>
        <button 
          type="submit" 
          className="btn btn-bwm-main">Submit</button>
      </form>
    )
}

export default LoginForm ;