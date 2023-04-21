import { useState } from 'react';
import Employee from './Employee';
function User() {
    const [userType, setUserType] = useState();
    if (userType == "employee") {
        return (
            <div>
                {/* <h1>Welcome Employee!</h1> */}
                <Employee></Employee>
            </div>
        )
    }
    if (userType == "admin") {
        return (
            <div>
                <h1>Welcome Admin!</h1>
            </div>
        )
    }
    const validate = (input) => {

        if (input == "employee") {
            setUserType('employee');

        }
        if (input == "admin") {
            setUserType('admin');
        }
    }
    return (
        <div>
            <h1>User</h1>
            <button onClick={() => validate('employee')}>Login</button>
        </div>
    )
}
export default User;