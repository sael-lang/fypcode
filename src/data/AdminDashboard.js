import './dist/all.css'
import './dist/styles.css'

function AdminDashboard () {

  return (
      
      <>
      <div>

    
<div class="mx-auto bg-grey-400">

    <div class="min-h-screen flex flex-col">
   
        <header class="bg-nav">
            <div class="flex justify-between">
                <div class="p-1 mx-3 inline-flex items-center">
                    <i class="fas fa-bars pr-2 text-white" onclick="sidebarToggle()"></i>
                    <h1 class="text-white p-2">MediCare</h1>
                </div>
                <div class="p-1 flex flex-row items-center">
                    <img onclick="profileToggle()" class="inline-block h-8 w-8 rounded-full" src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4" alt=""/>
                    <a href="#" onclick="profileToggle()" class="text-white p-2 no-underline hidden md:block lg:block">Super Admin</a>
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

                <ul class="list-reset flex flex-col">
                    <li class=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
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
                            MSI Registration
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
                            MSI Details
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                  
                    
                    
                </ul>

            </aside>
         
            <main class="bg-white-300 flex-1 p-3 overflow-hidden">

                <div class="flex flex-col">
            
                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div class="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    167
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Total Hospitals 
                                </a>
                            </div>
                        </div>

                        <div class="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    4896650
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Total Vaccines
                                </a>
                            </div>
                        </div>

                        <div class="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    167
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Medical Superintendents
                                </a>
                            </div>
                        </div>

                        <div class="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    1987
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Total Operating Staff
                                </a>
                            </div>
                        </div>
                    </div>

               
                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">

                     

                        <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div class="px-6 py-2 border-b border-light-grey">
                                <div class="font-bold text-xl">Hospital Data</div>
                            </div>
                            <div class="table-responsive">
                                <table class="table text-grey-darkest">
                                    <thead class="bg-grey-dark text-white text-normal">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Hospital Name</th>
                                        <th scope="col">Hospital Status</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Assigned Vaccines</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            Pakistan Air Force
                                        </td>
                                        <td>Approved</td>
                                        <td>Islamabad</td>
                                        <td>
                                            979330
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            Pakistan Institute of Medical Sciences
                                        </td>
                                        <td>Approved</td>
                                        <td>Islambad</td>
                                        <td>
                                            979330
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            Jinnah Hospital
                                        </td>
                                        <td>Approved</td>
                                        <td>Karachi</td>
                                        <td>
                                            979330
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                           Shaukat Khanum Memorial Hospital
                                        </td>
                                        <td>Approved</td>
                                        <td>Lahore</td>
                                        <td>
                                            979330
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
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
  
  export default AdminDashboard
  