import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import Footer from './layout/Footer';
import Header from './layout/Header';
import './index.css'
import { UserContext } from "./context/UserContext";
import { useState } from "react";






export default function App() {

  
  const [user,setUser]=useState(null)
  
  return (
    <BrowserRouter>
     <ToastContainer />
    <UserContext.Provider value={{user,setUser}}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index  element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
      </Route>
      </Routes>
      <Footer/>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);