import './landingpage.css'
import slide_1 from "./slide_1.jpg"
import slide_4 from "./slide_4.jpg"
import slide_5 from "./slide_5.jpg"
import slide_3 from "./slide_3.jpg"
import slide_2 from "./slide_2.jpg"
import virus from "./virus.jpg"
import docter from "./docterimage.jpg"
import pakistan from "./pakistan.jpg"


const Landingpage = () => {
  return (
    
 <>

  <div className='slidebox'>
   
  <div className='slideshow' id='slideset1'>
  <div>
  <img className='slideshowpicture' src={slide_5} />
  </div>
  <div>
  <img className='slideshowpicture' src={slide_4} />  </div>
  <div>
  <img className='slideshowpicture' src={slide_2} />
  </div>
</div>
<div className='slideshowtext1'>We are <b>Determined</b> for<br/> your <b>Better Life</b> </div>
<div className='slideshowtext2'>We can get the care you want 24/7</div>
</div>
<div className='protectsection'>How to protect yourself?</div>
<img className='protectpicture' src={virus} />
<div className='protectsection1'>Register</div>
<div className='protectsection2'>____________________________</div>
<div className='protectsection3'>Get Vaccinated</div>
<div className='protectsection4'>____________________________</div>
<div className='protectsection5'>Guide Others as Well</div>
<div className='protectsection6'>____________________________</div>
<div className='docterimagebbox'>
<img className='docterimage' src={docter} />
<div className='doctertext1'>What doctors say..</div>
<div className='doctertext'>It is a long established fact that a reader will be distracted by the readable content of a page when looking<br/> at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as<br/> opposed to using 'Content here, content here', making it look</div>
</div>
<div className='newssection'>
  <div className='Newsheader'>Latest News</div>
<div className='newssection1' id='slideset1'>
  <div>
  <img className='newssection1' src={slide_2} />
  <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking</div>
  </div>
  <div>
  <img className='newssection1' src={slide_1} />
  <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking</div>
  </div>
  <div>
  <img className='newssection1' src={slide_3} />
  <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking</div>
  </div>
</div>
</div>
<div className='updatesection'>
<div className='updateheader'>Get Every Update....</div>
<form className='updateform'>
  <textarea placeholder='Enter your Email' className='updateforminput'></textarea>
</form>
<button className='updateformbuttom'>Subscribe Now</button>
</div>
<div className='contactussection'>
<div className='contactusdata1'>Contact Us</div>
<div className='contactusdata2'>About Us</div>
<div className='contactusdata3'>Country</div><br/>
<a className='contactusdata4' href=''>location</a><br/><br/>
<a className='contactusdata5'>Call +01 1234567890</a><br/><br/>
<a className='contactusdata6' href=''>demo@gmail.com</a>
<div className='contactusdata7'>It is a long established fact that a reader will be distracted by the<br/> readable content of a page when looking It is a long established fact <br/>that a reader will be distracted by the readable content of a page when looking<br/>that a reader will be distracted by the readable content of a page when looking</div>
<img className='contactusdata8' src={pakistan} />
</div>
 </>
    
  )
}

export default Landingpage
