import User from "./User"
import First from "./First"

function App() {
  var user = {
    name: "rajesh",
    address: "hyderabad",
    role: "developer"
  }

  var obj = {
    x: 10,
    y: 20
  }

  return (
    <div>

      <h1>App</h1>

      {/* <User userDetails={user}></User> */}

      <First data={obj}></First>


    </div>
  )
}
export default App;




/*


  App -> object (2 keys)

  Send object from App to First

  First  to Second -> display those values of 2 keys on UI.


     App  (data)

     First  (data)

     Second (data) -> display


*/