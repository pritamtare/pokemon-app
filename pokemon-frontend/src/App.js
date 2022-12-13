import Header from "./components/header/header";
import Home from "./components/home/home";
import {Route,Routes } from "react-router-dom";
import Login from "./components/Login/login";

function App() {
  return (
    <div className="App">

     <Header />
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
