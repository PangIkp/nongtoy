import React from "react";
import "../Styles/Login.scss";

const Login = () => {
    return (
        <div className="login">
            <section className="login_image">
                <img src="Images/Login.png" alt="" />
            </section>

            <section className="login_wrapper">
                <section className="login_form">
                    <form action="">
                        <h1 className="login_form_title">Welcome back</h1>
                        <p className="login_form_text">Please enter your details</p>
                        <input className="login_form_input" type="text" placeholder="Username" />
                        <input className="login_form_input" type="password" placeholder="Password" />

                        <div className="remember_forgotpassword">
                            <label className="login_form_checkbox" > <input type="checkbox" id="rememberMe" /> Remember me</label>
                            <a href="" className="login_form_forgotpassword">Forgot password?</a>
                        </div>
                        <button className="login_form_button" >Login</button>

                        <p className="login_form_text2">Not registered yet ? <a href="signup" className="login_form_signup">Sign up</a></p>
                    </form>
                </section>
            </section>



        </div>
    );
};


export default Login;