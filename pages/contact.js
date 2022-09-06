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

            <div  className={[subpage.standout, "section"].join(" ")}>
                <div className="row">
                    <div className="col">
                        <form action="/send-data-here" method="post">
                            <label for="roll">Roll Number</label>
                            <input
                                type="text"
                                id="roll"
                                name="roll"
                                required
                                minlength="10"
                                maxlength="20"
                            />
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;