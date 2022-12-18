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
import MsiOSregister from "./data/MsiOsregister";
import Vaccinemanagment from "./data/Vaccinemanagment";
import Osdetails from "./data/Osdetails";
import Msiregister from "./data/Msiregistration";
import Msidetails from "./data/Msidetails";
import Adminvaccinemanagement from "./data/Adminvaccinemanagement";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar/><Landingpage/></>}/>
        <Route path="/home" element={<><Navbar/><Landingpage/></>}/>
        <Route path="/msios" element={<><MsiOSregister/></>}/>
        <Route path="/signin" element={<><Navbar/><Signin/></>}/>
        <Route path="/signup" element={<><Navbar/><Signup/></>}/>
        <Route path="/admindashboard" element={<><AdminDashboard/></>}/>
        <Route path="/msiregister" element={<><Msiregister/></>}/>
        <Route path="/msidetails" element={<><Msidetails/></>}/>
        <Route path="/adminvaccinemanagement" element={<><Adminvaccinemanagement/></>}/>
        <Route path="/medicalsuperindendent" element={<><Navbar/><MedicalSuperindendent/></>}/>
        <Route path="/vaccinemanagment" element={<><Navbar/><Vaccinemanagment/></>}/>
        <Route path="/parentdashboard" element={<><ParentDashboard/></>}/>
        <Route path="/account-verified/:Id" element={<><Confirming/></>}/>
        <Route path="/forgotpassword" element={<><Forgotpassword/></>}/>
        <Route path="/Osdetails" element={<><Osdetails/></>}/>
      </Routes>
    </>
  );
}

export default App;
