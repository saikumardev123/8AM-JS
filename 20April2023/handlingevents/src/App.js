import logo from './logo.svg';
import './App.css';
function App() {
  const greetings = () => {
    alert("Good Morning!!");
  }
  return (
    <div className="App">
      <button onClick={greetings}>Greetings</button>
    </div>
  );
}
export default App;


