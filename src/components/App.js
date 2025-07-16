
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {isLoggedIn ? (<h2>You are logged in!</h2>) :
        (<loginform onLogin = {handleLogin}/>)}

    </div>
  )
}

export default App
