import React,{useState} from 'react';
import './signup.css'
import axios from 'axios';
import { useNavigate} from 'react-router-dom'; 
import DatePicker from 'react-date-picker';

function Signup() {
  const [adminId,setadminId]=useState("");
  const [adminPassword,setadminPassword]=useState("");
  const [adminEmail,setadminEmail]=useState("");
  const [adminFirstname,setadminFirstname]=useState("");
  const [adminMiddlename,setadminMiddlename]=useState("");
  const [adminLastname,setadminLastname]=useState("");
  const [phone,setPhone]=useState("");
  const [DOB,setDOB]=useState(new Date());
  const history = useNavigate();
  var respons;
  
  const saveData = async() =>
{try{
    let formField = new FormData()
        formField.append('adminId',adminId)
        formField.append('adminEmail',adminEmail)
        formField.append('adminPassword',adminPassword)
        formField.append('adminFirstname',adminFirstname)
        formField.append('adminMiddlename',adminMiddlename)
        formField.append('adminLastname',adminLastname)
        formField.append('phone',phone)
        formField.append('DOB',DOB)
         await axios({
          method: 'post',
          url:'http://127.0.0.1:8000/',
          data: formField
        }).then(response =>{
          respons=response.status
          
        })// eslint-disable-next-line
        if (respons==200){
          history("/home") }

      }
      
       
   
    catch(er){
    history("/signup") }
}

  return (
    <div className='cat'>
    <form>
        <h1 className='header'><b>Sign Up </b></h1> 
        <div className='font1'><b>Admin Id</b></div><div><b>Admin Email</b></div>
      <input className='input1' type="text" placeholder='Enter Your Admin Id' name="adminId" value={adminId} onChange={(e)=>{setadminId(e.target.value)}}  /> 
      <input className='input2' type="text" placeholder='Enter Your  Admin Email' name="adminEmail" value={adminEmail} onChange={(e)=>{setadminEmail(e.target.value)}}  />
        <div className='font2'><b>Admin Password </b></div>
      <input className='input3'  placeholder='Enter Your Admin Password' type="password" name="adminPassword" value={adminPassword} onChange={(e)=>{setadminPassword(e.target.value)}}  /> 
      <div className='font2'><b>Admin Firstname</b></div>
      <input className='input3'placeholder='Enter Your Admin Firstname' type="text" name="adminFirstname"  value={adminFirstname} onChange={(e)=>{setadminFirstname(e.target.value)}} />
      <div className='font2'><b>Admin Middlename</b></div>
      <input className='input3'  placeholder='Enter your Admin Middlename' type="text" name="adminMiddlename" value={adminMiddlename} onChange={(e)=>{setadminMiddlename(e.target.value)}}  /> 
      <div className='font2'><b>Admin Lastname</b></div>
      <input className='input3' placeholder='Enter Your Admin Lastname' type="text" name="adminLastname" value={adminLastname} onChange={(e)=>{setadminLastname(e.target.value)}}  />  
      <div className='font2'><b>Phone</b></div>
      <input className='input3'placeholder='Enter Your Phone' type="text" name="phone"  value={phone} onChange={(e)=>{setPhone(e.target.value)}}/> 
      <div className='font2'><b>Date Of Birth</b></div>
      <DatePicker isClearable maxDate={new Date()} className='input4' onChange={(date)=>{ 
     setDOB(date)}} selected={DOB} value={DOB} /> <br /> <br />
         <input className='input5' type="checkbox" /> Do you <a href='http://google.com'>g</a> agree with our policy?
         <br /> <br />
      <button className='button' type="button" onClick={saveData} ><b>Save New User</b></button>
      </form>
    </div>
  );
}

export default Signup