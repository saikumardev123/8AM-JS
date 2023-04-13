
export default function Login() {
    // JS logic 

    const loginUser = () => {
        alert("login user called");
    }


    return (
        <div>
            <form>
                <input type="text" placeholder="username here"></input> <br></br><br></br>
                <input type="password" placeholder="password here"></input> <br></br><br></br>
                <button onClick={loginUser}>Login</button>
            </form>

        </div>
    )
}

// export default Login;
