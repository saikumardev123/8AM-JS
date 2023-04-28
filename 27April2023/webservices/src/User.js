import axios from 'axios';
import { useState, useEffect } from 'react';
function User() {

    const [user, setUser] = useState(
        {
            username: '',
            password: '',
            email: ''
        }
    )
    const [users, setUsers] = useState([]);
    const updateState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        getListOfUsers();
    }, []);

    const addUser = (event) => {
        event.preventDefault();
        console.log("user", user);

        axios.post("https://crudcrud.com/api/ad591419359b40ef9f18d7711a38bded/user", user).then(
            response => {
                console.log(response);
                getListOfUsers();
                alert("User added successfully");
            },
            error => {
                console.log(error);
                alert("some error");
            }
        )
    }
    const getListOfUsers = () => {
        axios.get("https://crudcrud.com/api/ad591419359b40ef9f18d7711a38bded/user").then(
            response => {
                console.log("response", response);
                setUsers(response.data);
            },
            error => {
                console.log("error", error);
            }
        )
    }
    return (
        <div>
            <center>
                <h1>Add User</h1>
                <form>
                    <input onChange={updateState} type="text" name="username" placeholder="enter username"></input> <br></br><br></br>
                    <input onChange={updateState} type="text" name="password" placeholder="enter password"></input><br></br><br></br>
                    <input onChange={updateState} type="text" name="email" placeholder="enter email"></input><br></br><br></br>
                    <button onClick={addUser}>Add User</button>
                </form>
            </center>
            <hr></hr>
            <table border="1" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>password</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>

            </table>


        </div>
    )

}
export default User;



