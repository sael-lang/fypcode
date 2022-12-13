import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./data/Navbar";
import Landingpage from "./data/Landingpage";
import Signin from "./data/Signin";
import Signup from "./data/Signup";
import Confirming from "./data/Confirming"
import Forgotpassword from "./data/Forgotpassword"
import MedicalSuperindendent from "./data/MedicalSuperindendent"
import ParentDashboard from "./data/ParentDashboard"
import AdminDashboard from "./data/AdminDashboard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar/><Landingpage/></>}/>
        <Route path="/home" element={<><Navbar/><Landingpage/></>}/>
        <Route path="/signin" element={<><Navbar/><Signin/></>}/>
        <Route path="/signup" element={<><Navbar/><Signup/></>}/>
        <Route path="/admindashboard" element={<><AdminDashboard/></>}/>
        <Route path="/medicalsuperindendent" element={<><MedicalSuperindendent/></>}/>
        <Route path="/parentdashboard" element={<><ParentDashboard/></>}/>
        <Route path="/account-verified/:Id" element={<><Confirming/></>}/>
        <Route path="/forgotpassword" element={<><Forgotpassword/></>}/>
      </Routes>
    </>
  );
}

export default App;
