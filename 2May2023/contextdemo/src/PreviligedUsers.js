import { useContext } from 'react';
import UserContext from './UserContext';
function PreviligedUsers() {
    var pru = useContext(UserContext);

    const renderList = () => {
        let list = pru.map(user => {

            var addr = user.addresses.map(address => {
                return address.hno + " " + address.city
            })

            return <li key={user.id}>{user.id} {addr}</li>
        })
        return list;
    }
    return (
        <>
            <h1>PreviligedUsers</h1>
            {pru.length}

            <ul>
                {renderList()}
            </ul>

        </>
    )
}
export default PreviligedUsers;
