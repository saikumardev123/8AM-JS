import { useState } from 'react';
import axios from 'axios';
function Register() {
    const [form, setForm] = useState();
    const updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setForm({ ...form, [name]: value });
    }
    const register = (event) => {
        event.preventDefault();
        console.log(form);
        axios.post("http://localhost:9091/user/register", form).then(
            response => {
                console.log("response", response);
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
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter email" name="email" />
                        </div>
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter username" name="username" />
                        </div>
                    </div> <br></br><div className="row">
                        <div className="col">
                            <input onChange={updateState} type="text" className="form-control" placeholder="Enter password" name="password" />
                        </div>
                        <div className="col">
                            <button onClick={register} className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Register;
