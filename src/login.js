import React, { Component } from "react";
import "./App.css";

// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );
const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
};





class Validate extends Component {
    state = initialState;
    handleChange = event => {
        const isCheckbox = event.target.type === "text";
        this.setState({
            [event.target.password]: isCheckbox
                ? event.target.checked
                : event.target.value
        });

    };

    validates = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";

        // let passwordError = "";

        // if (!this.state.name) {
        //     nameError = "Name cannot be blank";
        // }
        if (!this.state.email) {
            emailError = "Email cannot be blank";
        }
        if (!this.state.password) {
            passwordError = "Password cannot be blank";
        }

        // if (!this.state.email.includes("@")) {
        //     emailError = "invalid email";
        // }

        if (emailError || nameError || passwordError) {
            this.setState({ passwordError,emailError, nameError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validates();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
    };

    render() {


        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>

                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={this.props.email}
                                onChange={this.handleChange}

                            />
                            {this.state.emailError ? (
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.emailError}

                            </div>
                            ):null}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                type="text"
                                name="password"
                                placeholder="password"
                                value={this.props.password}
                                onChange={this.handleChange}

                            />

                            {this.state.passwordError ? (
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.passwordError}
                            </div>
                            ):null}
                        </div>
                        <div className="createAccount">
                            <button type="submit">Login</button>
                            <small>Don't Have an Account? <span className="signup-link"> Create one</span></small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Validate;