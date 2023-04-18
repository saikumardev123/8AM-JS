import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  const captureUserData = (user) => {
    console.log("user", user);
  }
  return (
    <div className="App">
      <h1>App Component</h1>
      <User onUserData={
        function (userdata) {
          captureUserData(userdata);
        }
      }></User>
    </div>
  );
}
export default App;
