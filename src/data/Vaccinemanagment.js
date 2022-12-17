import './dist/all.css'
import './dist/styles.css'

function Vaccinemanagment () {

    return (
        
        <>
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
                    <a href="buttons.html"
                       class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                        <i class="fab fa-wpforms float-left mx-2"></i>
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
        <main class="bg-white-300 flex-1 p-3 overflow-hidden">

            <div class="flex flex-col">
                <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                    <div class="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
                        <div class="p-4 flex flex-col">
                            <a href="#" class="no-underline text-white text-2xl">
                                1987
                            </a>
                            <a href="#" class="no-underline text-white text-lg">
                                Total Staff
                            </a>
                        </div>
                    </div>

                    <div class="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
                        <div class="p-4 flex flex-col">
                            <a href="#" class="no-underline text-white text-2xl">
                                48966
                            </a>
                            <a href="#" class="no-underline text-white text-lg">
                                Total Vaccines
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">

                  
                    <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                        <div class="px-6 py-2 border-b border-light-grey">
                            <div class="font-bold text-xl">Available Vaccines</div>
                        </div>
                        <div class="table-responsive">
                            <table class="table text-grey-darkest">
                                <thead class="bg-grey-dark text-white text-normal">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Vaccine Name</th>
                                    <th scope="col">Vaccine Type</th>
                                    <th scope="col">Quantity</th>
                                 
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        Polio
                                    </td>
                                    <td>Inactivated Polio Vaccine (IPV)</td>
                                    <td>9670</td>
                                    
                                    
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>
                                        Polio
                                    </td>
                                    <td>Oral Polio Vaccine (OPV)</td>
                                    <td>15600</td>
                                   
                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>
                                        COVID-19
                                    </td>
                                    <td>Moderna</td>
                                    <td>6700</td>
                                  
                                </tr>

                                <tr>
                                    <th scope="row">4</th>
                                    <td>
                                       COVID-19
                                    </td>
                                    <td>Sinopharm</td>
                                    <td>9450</td>
                                    
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
              
            </div>
        </main>
    </div>
        </>
      )
    }
    
    export default Vaccinemanagment
    
       