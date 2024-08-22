import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Signup from '../components/signup/Signup';
import Login from '../components/login/Login';
import Homebody from '../components/homebody/Homebody';
import { useHomeStore } from '../store';

const Home = () => {
  // Get state values from the store
  const landing = useHomeStore((state) => state.landing);
  const signup = useHomeStore((state) => state.signup);
  const login = useHomeStore((state) => state.login);

  return (
    <div>
      <Navbar />
      {/* Conditionally render components based on their state */}
      {landing && <Homebody />}
      {signup && <Signup />}
      {login && <Login />}
    </div>
  );
}

export default Home;
