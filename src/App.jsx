// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Header></Header>
      <button></button>
      <Home></Home>
      <ToastContainer></ToastContainer>
      <Faq></Faq>
    </div>
  );
};

export default App;