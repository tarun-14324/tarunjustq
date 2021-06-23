import  Navbar  from "./Navbar";
import Link from 'next/link';

const Signup = () => {
  const register=(event)=>{
alert("successfully registerd please login here")
  }

    return ( 
      <div>
      <Navbar/>
      <h2 className="name">Signup page</h2>
      
      <div className="containerthree">
      <div className="seone">
        <div className="leone"/>
        <form   className="desImage"> 
        <h1>Welcome</h1>
       
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          
          <button type="submit" id="login-button" onClick={register}><Link href="/login"><a >Register</a></Link></button>

       
      
</form>
          </div>  
</div>
      </div>
     );
}
 
export default Signup;