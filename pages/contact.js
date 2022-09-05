import CTA from "../comps/CTA";
import subpage from "../styles/Subpage.module.css";

const Contact = () => {
    return ( 
        <>
            <div className={[subpage.subPageHeader, "section"].join(" ")}>
                <div className="row">
                    <div className="col">
                        <h1>Contact Us</h1>
                        <p>Sed vitae finibus ipsum, ut vehicula risus</p>
                    </div>
                </div>
            </div>

            <CTA />
        </>
     );
}
 
export default Contact;