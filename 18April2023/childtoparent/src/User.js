function User(props) {

    var user = {
        name: "kiran",
        address: "hyd"
    }
    props.onUserData(user);
    return (
        <div>
            <h1>User</h1>
        </div>
    )

}
export default User;