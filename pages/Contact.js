import React from "react";
import  Navbar  from "./Navbar";

function ServiceComponent() {
  return (
    <div>
        <Navbar/>
    <div className="service-div-bg">
      <div className="service-div">
   

              
<div className="container">
  <div className="row header">
    <h1>CONTACT US &nbsp;</h1>
    <h3>Fill out the form below to learn more!</h3>
  </div>
  <div className="row body">
    <form action="#">
      
        
          <p className="pull-right">
            
            <input type="text" name="first_name"  className="inputcont" placeholder="First name"/>
          </p>
          <p className="pull-right">
            
            <input type="text" name="last_name"  className="inputcont" placeholder="Last name"/>      
          </p>
        
        
        
          <p>
            
            <input type="email" name="email" className="inputcont" placeholder="Email"/>
          </p>
               
        <div className="divider"></div>
        
         
          <input className="inputcont" placeholder="enter message here"></input>
    
        
        <br></br>
          <button className="contactbtn">submit</button>

        
        
      
    </form>  

  </div>
  </div>
</div>
      </div>
   </div>
  );
}

export default ServiceComponent;
