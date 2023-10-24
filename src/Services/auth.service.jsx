/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";


const AuthService = () => {
  const emailStorage = localStorage.getItem("email");

  const [data, setData] = useState([]);

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('email', email);
      console.log(emailStorage);
    } catch (error) {
      console.error(error);
    }
  };

  const getPersonalInfo = () => {
    fetch("/data/mock_data.json")
    .then(res => res.json())
    .then((json) => setData(json.users))
  };
  
  useEffect(() => {
    getPersonalInfo();
  }, []);

  return {
    data
  };

};

export default AuthService;
