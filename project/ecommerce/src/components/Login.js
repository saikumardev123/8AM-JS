import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [loginForm, setLoginForm] = useState();
    var navigate = useNavigate();
    const updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setLoginForm({ ...loginForm, [name]: value });
    }
    const login = (event) => {
        event.preventDefault();
        console.log(loginForm);
        axios.post("http://localhost:9091/user/login", loginForm).then(
            response => {
                console.log("response", response);
                if (response.data.statusCode == 200) {
                    navigate("/dashboard");
                }
            },
            error => {
                console.log(error);
            }
        )
    }
    return (
        <>
            <div className="container mt-3">
                <form>
                    <div className="row">
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter username" name="username" />
                        </div>
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter password" name="password" />
                        </div>
                        <div className="col">
                            <button onClick={login} className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;
