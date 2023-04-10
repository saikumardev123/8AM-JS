import axios from 'axios';
function App() {

  axios.get("https://fakestorapi.com/products").then(
    function (response) {
      console.log(response)
    },
    function (error) {
      console.log(error);
    }
  )
  // Logic 


  return (
    <div>
      <h1>Hello</h1>
    </div>
  )

}

export default App;
