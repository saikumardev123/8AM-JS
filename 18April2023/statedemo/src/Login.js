import React from 'react';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    captureData = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        console.log(name + "\t" + value);
        if (name == "username") {
            this.setState({ username: value });
        }
        if (name == "password") {
            this.setState({ password: value });
        }
    }
    login = (event) => {
        event.preventDefault(); // it stops the page from reloading.
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form>
                    <input onChange={this.captureData} type="text" name="username" placeholder="username here"></input> <br></br><br></br>
                    <input onChange={this.captureData} type="text" name="password" placeholder="password here"></input><br></br><br></br>
                    <button onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}
export default Login;

/*

    onChange ->

    this.state -> predefined variable that stores the data of a component



*/