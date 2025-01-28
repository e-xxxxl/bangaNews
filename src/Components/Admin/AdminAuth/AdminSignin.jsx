import React from 'react'
import bangalogo from '../../../assets/bangalogo.png'
const AdminSignin = () => {
  return (
    <>
    


    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center w-100 px-3" style={{ maxWidth: "400px" }}>
        <img
          src={bangalogo}
          alt="Bootstrap Logo"
          width="75"
          height="40"
          className="mb-4"
        />
        <h3 className="mb-3">Please sign in</h3>
        <form>
          <div className="form-floating mb-2">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <button className="w-100 btn btn-primary" type="submit">
            Sign in
          </button>
        </form>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2024</p>
      </div>
    </div>

    
    </>
  )
}

export default AdminSignin