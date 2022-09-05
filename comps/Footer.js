import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="section">
            <div className="row top">
                <div className="col">
                <div className="logo">
                <Link href="/" ><a><Image src="/vercel.svg" width={142} height={32}></Image></a></Link>
            </div>
                </div>

                <div className="col">
                    <h3>Pages</h3>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/services"><a>Services</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </div>

                <div className="col">
                    <h3>This is my footer.</h3>
                </div>

                <div className="col">
                    <h3>This is my footer.</h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer;