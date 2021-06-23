import  Navbar  from "./Navbar";
import Link from 'next/link';
const contact = () => {
  return ( 
   <div>
   <Navbar/> 
  
    <div id="service" className="Services">
   
            
                
               
          
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
                
             <h3>Simple UI/UX Design</h3>
               
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
               
                <h3>web development</h3>
               
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
                
                <h3>User-Friendly Responsive Design</h3>
               
             </div>
          </div>
          <Link href="/">
          <a className="read_more" >Go to Main Page</a>
      </Link>
         
       </div>
    </div>

  );
}

export default contact
