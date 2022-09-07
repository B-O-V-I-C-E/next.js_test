import { motion, AnimatePresence } from "framer-motion";
import subpage from "../styles/Subpage.module.css";

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
        translateX: '-100px',
    },
    show: {
        opacity: 1,
        scale: 1,
        translateX: '0px',
    },
}

const SubpageHeader = (props) => {
    return (
        <AnimatePresence><motion.div className={[subpage.subPageHeader, "section"].join(" ")}
            variants={container} initial="hidden" whileInView={"show"} exit={{ scaleY: 0 }} viewport={{ amount: "some", margin: "-150px" }}>

            <div className="row">
                <div className="col">
                    <motion.h1 variants={item}>{props.title}</motion.h1>
                    <motion.p variants={item}>{props.desc}</motion.p>
                </div>
            </div>
            
        </motion.div></AnimatePresence>
    );
}

export default SubpageHeader;