
import React, { useState, useEffect } from "react";
import './style.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate} from "react-router-dom";
import Main from "./main.js";

export default function Login() {
  // useEffect(()=>{
  //   toast("The password field should cannot contain any special character other than @ and must contain an uppercase letter and a number",toastOptions);
  // },[])
  const Navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  let userN=1;
  let passS=1;
  let userV=1;
  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      userN=0;
    } 
    if (password === "") {
      passS=0;
    }
    if (username.search("@") == -1) {
      userV=0;
    }
    let userP = 0;
    let numP = 0;
    let speC = 0;
    // console.log(password);
    let p = password.length;
    for (let i = 0; i < p; i++) {
      if ((password[i]) >= 0 && (password[i]) <= 9) {
        // console.log("no");
        numP = 1;
      }
      else if ((password[i]) >= "A" && (password[i]) <= "Z") {
        // console.log("up");
        userP = 1;
      }
      else if ((password[i]) == "@") {
        // console.log("sp");
        speC = 1;
      } else if((password[i]>="a" && (password[i]<="z") )){
      }else{
        toast.error("The password field should not contain any special character other than @ and must contain an uppercase letter and a number", toastOptions);
        return false;
      }
    }
    if (userP == 1 && speC == 1 && numP == 1 && userN==1 && passS==1 && userV==1){
      if(password==="SmartServTest@123"){
        return true;
      }else{
        return false;
      }
    }else{
      if(userN==0){
        toast.error("Username is required it cannot be empty.", toastOptions);
      }
      if(userV==0){
        toast.error("Username should be a valid email", toastOptions);
      }
      if(passS==0){
        toast.error("password is required it cannot be empty.", toastOptions);
      }
      return false;
    }
  };
  
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("true");
      Navigate("/Main");
    } else {
      console.log("false");
    }
  };
  return (
    <>
      <main>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="main">
            <img src="https://media.licdn.com/dms/image/C510BAQGgLHx-Qk85Rg/company-logo_200_200/0/1631383153885?e=1712188800&v=beta&t=32yUVOVb5-w1xEnW0y1hL9YloCFd43BF9EEns4gDCkI" alt="" />
            <div className="start">
              <h1 className="s1">SMART</h1>
              <h1 className="s2">SERV</h1>
            </div>
            <input className="infield"
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
              min="3"
              />
            <input className="infield"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
              />
            <div >
              <input className="loginb" type="submit" value="Login" />
            </div>
            <span>
              <a href="">Forgot your Password</a>
            </span>
          </div>
        </form>
        <ToastContainer />
      </main>
    </>
  );
}

;
