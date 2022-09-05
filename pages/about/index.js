import Navbar from "../../comps/Navbar";
import Image from "next/image";

const About = () => {
    return ( 
        <div>
            <h1>About</h1>
            <Image src="/favicon.ico" width={120} height={100}></Image>
            <p>This is the about page</p>
        </div>
     );
}
 
export default About;