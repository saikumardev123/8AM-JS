import './App.css';
import Users from './Users';
import UserContext from './UserContext';
function App() {
  var previligedUsers = [
    {
      id: 101,
      name: "kiran",
      addresses: [
        {
          hno: 8989,
          city: "Hyderabad"
        },
        {
          hno: 8981,
          city: "Hyderabad"
        }
      ]
    },
    {
      id: 102,
      name: "Rajesh",
      addresses: [
        {
          hno: 6789,
          city: "Banglore"
        },
        {
          hno: 8981,
          city: "Banglore"
        }
      ]
    },
    {
      id: 103,
      name: "Nikhil",
      addresses: [
        {
          hno: 11,
          city: "chennai"
        },
        {
          hno: 12,
          city: "Chennai"
        }
      ]
    }
  ]
  return (
    <>
      <UserContext.Provider value={previligedUsers}>
        <Users></Users>
      </UserContext.Provider>

    </>
  );
}
export default App;


/*


       App (pr)

    Users

Previligedusers


*/




