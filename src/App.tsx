import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Result from "./Components/Sing/Result";
import SingUp from "./Components/Sing/SingUp";
import Login from "./Components/Sing/Login";
import About from "./Components/Page/About";
import Contact from "./Components/Page/Contact";
import Home from "./Components/Page/Home";
import Login2 from "./Components/Sing/Login2";
import Signup2 from "./Components/Sing/Signup2";
import PrivateComponent from "./Components/Sing/PrivateComponent";
// import Home from "./Components/Page/Home";
// import Contact from "./Components/Page/Contact";
// import About from "./Components/Page/About";

// import Login from "./Components/Sing/Login";
// import SingUp from "./Components/Sing/SingUp";
// import Result from "./Components/Sing/Result";

function App() {
  // const token = localStorage.getItem("auth");
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        {/* {token ? <Route path="Login" /> : <Navigate to="Login"/>} */}
</Route>
        <Route path="Login" element={<Login2/>}/>
        <Route path="demo" element={<Signup2/>}/> 
      

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
