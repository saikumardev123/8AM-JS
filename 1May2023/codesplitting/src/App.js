import logo from './logo.svg';
import './App.css';
import React, { useState, Suspense } from 'react';
const Dashboard = React.lazy(() => import("./Dashboard"));
const Login = React.lazy(() => import("./Login"));
const SignUp = React.lazy(() => import("./SignUp"));
function App() {

  const [user, setUser] = useState(false);

  if (user) {
    return (
      <div>
        <Suspense fallback={<div>Loading....</div>}>
          <Dashboard></Dashboard>
        </Suspense>

      </div>
    )
  }
  return (
    <div className="App">
      <button onClick={() => {
        setUser(true);
      }}>LoginSuccess</button>
      <button>Logout</button>
    </div>
  );
}

export default App;






