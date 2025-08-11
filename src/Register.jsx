import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register-container'>
    <div className='register'>
      <h2>Create an Account</h2>
      <form className='register-form'>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor='username'>Username</label></td>
              <td><input type='text' id='username' name='username' placeholder='Enter your username' required /></td>
            </tr>
            <tr>
              <td><label htmlFor='email'>Email</label></td>
              <td><input type='email' id='email' name='email' placeholder='Enter your email' required /></td>
            </tr>
            <tr>
              <td><label htmlFor='password'>Password</label></td>
              <td><input type='password' id='password' name='password' placeholder='Enter your password' required /></td>
            </tr>
            <tr>
              <td><label htmlFor='confirm-password'>Confirm Password</label></td>
              <td><input type='password' id='confirm-password' name='confirm-password' placeholder='Confirm your password' required /></td>
            </tr>
          </tbody>
        </table>
        <button type='submit'>Register</button>
      </form>
      <p>Already have an account?</p>
      <Link to='/login' className='login-link'>Login here</Link>
    </div>
  </div>
)
}
export default Register