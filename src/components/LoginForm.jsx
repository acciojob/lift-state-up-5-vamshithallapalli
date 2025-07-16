import React from 'react'

const LoginForm = ({onLogin}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
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