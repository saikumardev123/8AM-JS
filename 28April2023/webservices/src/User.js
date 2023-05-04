import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

var userId;
function User() {

    const [user, setUser] = useState(
        {
            username: '',
            password: '',
            email: ''
        }
    )
    const [users, setUsers] = useState([]);

    var usernameRef = useRef();
    var passwordRef = useRef();
    var emailRef = useRef();
    var saveUserRef = useRef();

    const updateState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        getListOfUsers();
    }, []);

    const renderRows = () => {
        let list = users.map(user => {
            return <tr key={user._id}><td>{user.username}</td><td>{user.password}</td><td>{user.email}</td><td><button onClick={() => deleteUser(user._id)}>Delete</button></td><td><button onClick={() => editUser(user)}>Edit</button></td></tr>
        })
        return list;
    }

    const editUser = (user) => {

        usernameRef.current.value = user.username;
        passwordRef.current.value = user.password;
        emailRef.current.value = user.email;
        // localStorage.setItem("_id", user._id);
        userId = user._id;
        saveUserRef.current.style.display = "inline";
    }
    const deleteUser = (_id) => {
        console.log("_id", _id);
        axios.delete("https://crudcrud.com/api/84ca93b8229140a29955c959e1a535c9/user/" + _id).then(
            response => {
                console.log(response);
                getListOfUsers();
                alert("User deleted successfully");
            },
            error => {
                console.log(error);
                alert("some error");
            }
        )
    }

    const addUser = (event) => {
        event.preventDefault();
        console.log("user", user);

        axios.post("https://crudcrud.com/api/84ca93b8229140a29955c959e1a535c9/user", user).then(
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

    const saveUser = (event) => {
        event.preventDefault();
        console.log("user", user);

        // var _id = localStorage.getItem("_id");

        axios.put("https://crudcrud.com/api/84ca93b8229140a29955c959e1a535c9/user/" + userId, user).then(
            response => {
                console.log(response);
                alert("user updated");
                saveUserRef.current.style.display = "none";
                getListOfUsers();
            },
            error => {
                console.log(error);
            }
        )

    }
    const getListOfUsers = () => {
        axios.get("https://crudcrud.com/api/84ca93b8229140a29955c959e1a535c9/user").then(
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
                    <input ref={usernameRef} onChange={updateState} type="text" name="username" placeholder="enter username"></input> <br></br><br></br>
                    <input ref={passwordRef} onChange={updateState} type="text" name="password" placeholder="enter password"></input><br></br><br></br>
                    <input ref={emailRef} onChange={updateState} type="text" name="email" placeholder="enter email"></input><br></br><br></br>
                    <button onClick={addUser}>Add User</button>
                    <button ref={saveUserRef} style={{ display: "none" }} onClick={saveUser}>Save User</button>
                </form>
            </center>
            <hr></hr>
            <table border="1" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>password</th>
                        <th>email</th>
                        <th colSpan="2">Operation</th>
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













