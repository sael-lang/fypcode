import React,{useState} from 'react';
import './signin.css'
import axios from 'axios';
import { useNavigate} from 'react-router-dom'; 

function Signin() {
  const [adminId,setadminId]=useState("");
  const [adminPassword,setadminPassword]=useState("");
  const history = useNavigate();
 var respons;

  const saveData = async() =>
{
    let formField = new FormData()
    formField.append('adminId',adminId)
    formField.append('adminPassword',adminPassword)
         await axios({
          method: 'post',
          url:'http://127.0.0.1:8000/signin',
          data: formField
        }).then(response =>{  
           respons=response.status;
            console.log(respons);
          })
          // eslint-disable-next-line
if (respons==200){
        history("../admindashboard", { replace: true }) 
   }
   else{ 
    history("/signup")
}}

  return (
    <div className='ca'>
    <form>
        <h1 className='header1'><b>sign in </b></h1> 
        <h3 className='f1'>Admin Id</h3>
      <input className='i1' type="text" name="adminId" value={adminId} onChange={(e)=>{setadminId(e.target.value)}}  /> 
      <h3 className='f1'>Admin Password</h3>
      <input className='i1' type="password" name="adminPassword" value={adminPassword} onChange={(e)=>{setadminPassword(e.target.value)}}  /> <br/><br/>
      <input className='in' type="checkbox" />Remember Me
      <br/><br/>
      <button className='b' type="button" onClick={saveData} >Save New User</button>
      <br/><br/>
      <a className='signin' href='/forgotpassword'>forgotpassword</a>
      </form>
    </div>
  );
}

export default Signin