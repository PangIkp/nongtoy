import React from "react";
import "../Styles/Signup.scss";

const Signup = () => {
    return (
        <div className="signup">
            <section className="signup_image">
                <img src="Images/Signup.png" alt="" />
            </section>

            <section className="signup_wrapper">
                <section className="signup_form">
                    <form action="">
                        <h1 className="signup_form_title">Create an account</h1>
                        <p className="signup_form_text">Please enter your details <a href="login" className="signup_form_login">Log in</a></p>

                        <div className="signup_form_input_container">
                            <label>First Name
                                <input className="signup_form_input" type="text" placeholder="First Name" />
                            </label>
                            <label>Last Name
                                <input className="signup_form_input" type="text" placeholder="Last Name" />
                            </label>
                            <label>Username
                                <input className="signup_form_input" type="text" placeholder="Username" />
                            </label>

                            <label>Phone Number
                                <input className="signup_form_input" type="tel" placeholder="Phone number" />
                            </label>
                        </div>

                        <div className="signup_form_input_container_email">
                            <label>Email address
                                <input className="signup_form_input" type="email" placeholder="example@gmail.com" />
                            </label>
                        </div>


                        <div className="signup_form_input_container">
                            <label>Password
                                <input className="signup_form_input" type="password" placeholder="Password" />
                            </label>

                            <label>Confirm Password
                                <input className="signup_form_input" type="password" placeholder="Confirm Password" />
                            </label>
                        </div>

                        <p className="signup_form_text2">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        <button className="signup_form_button" >Sign up</button>

                    </form>
                </section>
            </section>
        </div>
    );
};



export default Signup;