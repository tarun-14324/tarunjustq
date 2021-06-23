import  Navbar  from "./Navbar";
import Link from 'next/link';

const login = () => {
  

    return ( 
      <div>
      <Navbar/>
      <h2 className="name">Login page</h2>
    <div className="containerthree">
  <div className="session">
    <div className="left">
     
	</div>
    <form className="desImage"> 
      
      <p>Welcome back! Log in to your account to view today s tasks:</p>
      <div className="floating-label">
        <input placeholder="Email" type="email" name="email" id="email"/>
    
       
      </div>
      <div className="floating-label">
        <input placeholder="Password" type="password" name="password" id="password" />
        
       
        
      </div>
      <Link href="/TodoForm"><a className="addbut">Log in</a></Link> 
      
      <Link href="/signup">
      <a className="addbut">Register</a>
      </Link>
    
    
    </form>
  </div>

</div>
   </div>    

      
     );
}
 
export default login;