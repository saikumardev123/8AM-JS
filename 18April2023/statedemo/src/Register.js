import { useState } from 'react';
function Register() {

    const [state, setState] = useState({
        username: '',
        password: '',
        email: ''
    });

    const captureData = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        console.log(name + "\t" + value);
        if (name == "username") {
            setState({ username: value });
        }
        if (name == "password") {
            setState({ password: value });
        }
        if (name == "email") {
            setState({ email: value });
        }
    }

    const register = (event) => {

        event.preventDefault();
        console.log("state", state);

    }


    return (
        <div>
            <h1>Register Here</h1>

            <form>
                <input onChange={captureData} type="text" name="username" placeholder="username here"></input> <br></br><br></br>
                <input onChange={captureData} type="text" name="password" placeholder="password here"></input><br></br><br></br>
                <input onChange={captureData} type="text" name="email" placeholder="email here"></input><br></br><br></br>
                <button onClick={register}>Register</button>
            </form>

        </div>
    )

}
export default Register;
