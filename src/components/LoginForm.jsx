import React from 'react'

const LoginForm = ({isLoggedIn, onLogin}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }

    if(isLoggedIn){
      return <p>You are logged in!</p>
    }
  return (
    <form onSubmit={handleSubmit}>
     <div>
        <label>
          Username: <input type="text" required />
        </label>
      </div>
      <div>
        <label>
          Password: <input type="password" required />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm