import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav className="main_header row">
            <div className="logo">
                <Link href="/" ><a><Image src="/vercel.svg" width={142} height={32}></Image></a></Link>
            </div>
            <div className="menu_links">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/services"><a>Services</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;