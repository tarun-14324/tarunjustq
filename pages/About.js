import  Navbar  from "./Navbar";
import Link from 'next/link';
const About = () => {
  return (  
     <div>
        <Navbar/>
    <div className="about-container-bg">
     
              
         
              <div id="service" className="Services">
    <div className="cont">
     
       <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-boxone">
               
                <h3>Simple UI</h3>
               
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
                
                <h3>Dedicated Pages</h3>
               
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
               
                <h3>Easy Registration</h3>
               
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
                
                <h3>User-Friendly</h3>
               
             </div>
          </div>
         
          
          <Link href="/">
        <a className="read_more">Main Page</a>
      </Link>
       </div>
    </div>
 </div>

 </div>

    </div>
  );
}

export default About;
