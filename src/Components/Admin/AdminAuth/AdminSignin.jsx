// import React from 'react'
// import bangalogo from '../../../assets/bangalogo.png'
// const AdminSignin = () => {

//     const allowedUsers = [
//         { email: "user1@example.com", password: "password123" },
//         { email: "user2@example.com", password: "securepass" }
//       ];
      
//       const SignIn = () => {
//         const [formData, setFormData] = useState({ email: "", password: "" });
//         const [error, setError] = useState("");
      
//         const handleChange = (e) => {
//           const { name, value } = e.target;
//           setFormData((prev) => ({ ...prev, [name]: value }));
//         };
      
//         const handleSubmit = (e) => {
//           e.preventDefault();
//           const userExists = allowedUsers.some(
//             (user) => user.email === formData.email && user.password === formData.password
//           );
//           if (userExists) {
//             console.log("Login successful", [formData]);
//             setError("");
//           } else {
//             setError("Invalid email or password");
//           }
//         };
      
//   return (
//     <>
    

//     <div className="d-flex align-items-center justify-content-center vh-100">
//       <div className="text-center w-100 px-3" style={{ maxWidth: "400px" }}>
//         <img
//           src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
//           alt="Bootstrap Logo"
//           width="72"
//           height="72"
//           className="mb-4"
//         />
//         <h2 className="mb-3">Please sign in</h2>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-floating mb-2">
//             <input
//               type="email"
//               className="form-control"
//               id="floatingInput"
//               name="email"
//               placeholder="name@example.com"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <label htmlFor="floatingInput">Email address</label>
//           </div>
//           <div className="form-floating mb-2">
//             <input
//               type="password"
//               className="form-control"
//               id="floatingPassword"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <label htmlFor="floatingPassword">Password</label>
//           </div>
//           <div className="form-check text-start my-3">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               value="remember-me"
//               id="rememberMe"
//             />
//             <label className="form-check-label" htmlFor="rememberMe">
//               Remember me
//             </label>
//           </div>
//           <button className="w-100 btn btn-primary" type="submit">
//             Sign in
//           </button>
//         </form>
//         <p className="mt-5 mb-3 text-muted">&copy; 2017–2024</p>
//       </div>
//     </div>
    
//     </>
//   )
// }

// export default AdminSignin





import React, { useState } from "react";
import bangalogo from '../../../assets/bangalogo.png'
import { useNavigate } from "react-router-dom";

const allowedUsers = [
  { email: "user1@example.com", password: "password123" },
  { email: "user2@example.com", password: "securepass" }
];

const AdminSignin = () => {
  const navigate = useNavigate();   

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = allowedUsers.some(
      (user) => user.email === formData.email && user.password === formData.password
    );
    if (userExists) {
      navigate("/admin/dashboard")
      console.log("Login successful", [formData]);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center w-100 px-3" style={{ maxWidth: "400px" }}>
        <img
          src={bangalogo}
          alt="Bootstrap Logo"
         
          height="52"
          className="mb-4"
        />
        <h3 className="mb-3">Please sign in</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-2">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
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
  );
};

export default AdminSignin;