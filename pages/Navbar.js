import Link from 'next/link';
const Navbar = () => {
  return (
      <div className="navbar">
      <h4 className="logo">TODO APP</h4>
    
     <Link href="/">Home</Link>
     <Link href="/About">About</Link>
     <Link href="/Services">Services</Link>
     <Link href="/login">Login</Link>
     <Link href="/signup">Signup</Link>
     <Link href="/Contact">Contact</Link>
          
         </div>
          
  );
}
export default Navbar