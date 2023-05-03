
import React from 'react';
function Login() {

    var usernameRef = React.useRef();

    const increaseSize = () => {
        var size = usernameRef.current.size;
        var length = usernameRef.current.value.length;
        console.log(size + "\t" + length);
        if (length > size) {
            usernameRef.current.size = ++size;
        }

    }
    return (
        <div>
            <input ref={usernameRef} onKeyUp={increaseSize} size="20" type="text" placeholder="username"></input>
        </div>
    )

}
export default Login;