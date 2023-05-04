
import HOC from './HOC';

function Users(props) {
    return (
        <>
            <h1 onClick={props.updateCounter}>Users Count is {props.counter}</h1>
        </>
    )
}
const UsersHOC = HOC(200, Users);
export default UsersHOC;