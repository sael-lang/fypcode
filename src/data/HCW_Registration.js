import './dist/all.css'
import './dist/styles.css'
import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom'; 
import axios from 'axios';
import DatePicker from 'react-date-picker';

function MsiOSregister () {

    const [HCW_ID,set_HCW_ID]=useState("");
    const [HCW_Password,set_HCW_Password]=useState("");
    const [HCW_Email,set_HCW_Email]=useState("");
    const [HCW_Firstname,set_HCW_Firstname]=useState("");
    const [HCW_Middlename,set_HCW_Middlename]=useState("");
    const [HCW_Lastname,set_HCW_Lastname]=useState("");
    const [HCW_phone,set_HCW_Phone]=useState("");
    const [HCW_Hospital_ID,set_HCW_Hospital_ID]=useState("");
    const [HCW_DOB,set_HCW_DOB]=useState(new Date());
    const history = useNavigate();
    var respons;

    const saveData = async() =>
    {try{
        let formField = new FormData()
            formField.append('HCW_ID',HCW_ID)
            formField.append('HCW_Email',HCW_Email)
            formField.append('HCW_Password',HCW_Password)
            formField.append('HCW_Firstname',HCW_Firstname)
            formField.append('HCW_Middlename',HCW_Middlename)
            formField.append('HCW_Lastname',HCW_Lastname)
            formField.append('HCW_phone',HCW_phone)
            formField.append('HCW_DOB',HCW_DOB)
            formField.append('HCW_Hospital_ID',HCW_Hospital_ID)
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
      
      <>
     

     <div>

<div class="mx-auto bg-grey-lightest">
    <div class="min-h-screen flex flex-col">
        <header class="bg-nav">
            <div class="flex justify-between">
                <div class="p-1 mx-3 inline-flex items-center">
                    <i class="fas fa-bars pr-2 text-white" onclick="sidebarToggle()"></i>
                    <h1 class="text-white p-2">MediCare</h1>
                </div>
                <div class="p-1 flex flex-row items-center">
                    <img onclick="profileToggle()" class="inline-block h-8 w-8 rounded-full" src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4" alt=""/>
                    <a href="#" onclick="profileToggle()" class="text-white p-2 no-underline hidden md:block lg:block">Medical Superintendent</a>
                    <div id="ProfileDropDown" class="rounded hidden shadow-md bg-white absolute pin-t mt-12 mr-1 pin-r">
                        <ul class="list-reset">
                          <li><a href="#" class="no-underline px-4 py-2 block text-black hover:bg-grey-light">My account</a></li>
                          <li><a href="#" class="no-underline px-4 py-2 block text-black hover:bg-grey-light">Notifications</a></li>
                          <li><hr class="border-t mx-2 border-grey-ligght"/></li>
                          <li><a href="#" class="no-underline px-4 py-2 block text-black hover:bg-grey-light">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        <div class="flex flex-1">
            <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
                <div class="flex">

                </div>
                <ul class="list-reset flex flex-col">
                    <li class=" w-full h-full py-3 px-2 border-b border-light-border ">
                        <a href="index.html"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-tachometer-alt float-left mx-2"></i>
                            Dashboard
                            <span><i class="fas fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    <li class="w-full h-full py-3 px-2 border-b border-light-border">
                        <a href="forms.html"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fab fa-wpforms float-left mx-2"></i>
                            OS Registration
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    
                    <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a href="forms.html"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fab fa-wpforms float-left mx-2"></i>
                            HCW Registration
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    <li class="w-full h-full py-3 px-2 border-b border-light-border">
                        <a href="buttons.html"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-grip-horizontal float-left mx-2"></i>
                            Vaccine Management
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    <li class="w-full h-full py-3 px-2 border-b border-light-border">
                        <a href="tables.html"
                            class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-table float-left mx-2"></i>
                            OS Details
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                  
                  
                </ul>

            </aside>
            <main class="bg-white-500 flex-1 p-3 overflow-hidden">

                <div class="flex flex-col">
                    <div class="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
                    

           
                    </div>


                    <div class="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
                        <div class="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
                            <div class="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
                                Details of Healthcare Worker
                            </div>
                            <div class="p-3">
                                <form class="w-full">
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                                                   for="grid-first-name">
                                                First Name
                                            </label>
                                            <input class="appearance-none block w-full bg-gray-200 text-grey-darker border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-600"
                                                   id="grid-last-name" type="text" placeholder="Jane" value ={HCW_Firstname} onChange={(e)=>{set_HCW_Firstname(e.target.value)}}/>
                                            
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                                                   for="grid-first-name">
                                                Last Name
                                            </label>
                                            <input class="appearance-none block w-full bg-gray-200 text-grey-darker border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-600"
                                                   id="grid-last-name" type="text" placeholder="Doe" value ={HCW_Lastname} onChange={(e)=>{set_HCW_Lastname(e.target.value)}}/>
                                            
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                                                   for="grid-first-name">
                                                Email
                                            </label>
                                            <input class="appearance-none block w-full bg-gray-200 text-grey-darker border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-600"
                                                   id="grid-last-name" type="text" placeholder="Enter your email" value ={HCW_Email} onChange={(e)=>{set_HCW_Email(e.target.value)}}/>

                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-light mb-1"
                                                   for="grid-last-name">
                                                Middle Name
                                            </label>
                                            <input class="appearance-none block w-full bg-gray-200 text-grey-darker border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white-500 focus:border-gray-600"
                                                   id="grid-last-name" type="text" placeholder="M" value ={HCW_Middlename} onChange={(e)=>{set_HCW_Middlename(e.target.value)}} />
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                                                   for="grid-password">
                                                Password
                                            </label>
                                            <input class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                                   id="grid-password" type="password" placeholder="******************" value ={HCW_Password} onChange={(e)=>{set_HCW_Password(e.target.value)}} />
                                            <p class="text-grey-dark text-xs italic">Use a strong password</p>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-2">
                                       
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                                                   for="grid-state">
                                                Phone Number
                                            </label>
                                            <div class="">
                                                <input class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                                id="grid-city" type="text" placeholder="Enter your phone number" value ={HCW_phone} onChange={(e)=>{set_HCW_Phone(e.target.value)}} />
                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grey-darker">
                                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 20 20">
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                                                   for="grid-zip">
                                                Date of Birth
                                            </label>
                                            <DatePicker isClearable maxDate={new Date()} className='input4' onChange={(date)=>{ 
                                            set_HCW_DOB(date)}} selected={HCW_DOB} value={HCW_DOB} /> <br /> <br />
                                        </div>
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                                                   for="grid-zip">
                                                CNIC
                                            </label>
                                            <input class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                                   id="grid-zip" type="text" placeholder="Enter CNIC" value ={HCW_ID} onChange={(e)=>{set_HCW_ID(e.target.value)}} />

                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-light mb-1"
                                                   for="grid-zip">
                                                Hospital ID
                                            </label>

                                            <input class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                                   id="grid-zip" type="text" placeholder="Enter Hospital ID" value ={HCW_Hospital_ID} onChange={(e)=>{set_HCW_Hospital_ID(e.target.value)}} />


                                        </div>
                                    </div>
                                    <a href="/">
                                    <button class="bn53" onClick={saveData} >SUBMIT</button>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
               
                </div>
            </main>
         
        </div>
       

    </div>

</div>

<script src="./main.js"></script>

      </div>

        
      </>
    )
  }
  
  export default MsiOSregister
  