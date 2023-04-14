function User(props) {
    console.log("props", props);
    return (
        <div>
            <h1>I am in user component</h1>
            {props.userDetails.name} <br></br>
            {props.userDetails.address}<br></br>
            {props.userDetails.role}
        </div>
    )

}
export default User;