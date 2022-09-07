import subpage from "../styles/Subpage.module.css";
import { motion, AnimatePresence } from "framer-motion";
import SubpageHeader from "../comps/Subpage-head";

const container = {
    hidden: {
      opacity: 0,
      scale: .98,
      transition: {
        staggerChildren: 0.25,
      }
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.25,
      }
    }
  }
  
  const item = {
    hidden: {
      opacity: 0,
      scale: .98,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  }

  const page = {
    name: "Contact Us"
  }

const Contact = () => {
    return (
        <>
            <SubpageHeader title="Contact Us" desc="Add your subpage description here."/>

            <div  className={[subpage.standout, "section"].join(" ")}>
                <div className="row">
                    <div className="col">
                        <form action="/send-data-here" method="post">
                            <label htmlFor="roll">Roll Number</label>
                            <input
                                type="text"
                                id="roll"
                                name="roll"
                            />
                            <label htmlFor="name">Name:</label>
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