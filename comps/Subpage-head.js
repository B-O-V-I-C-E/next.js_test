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

const SubpageHeader = () => {
    return (
        <AnimatePresence><motion.div className={[subpage.subPageHeader, "section"].join(" ")}
            variants={container} initial="hidden" whileInView={"show"} exit={{ scaleY: 0 }} viewport={{ amount: "some", margin: "-150px" }}>

            <div className="row">
                <div className="col">
                    <motion.h1 variants={item}>page.name</motion.h1>
                    <motion.p variants={item}>Add your subpage description here</motion.p>
                </div>
            </div>
            
        </motion.div></AnimatePresence>
    );
}

export default SubpageHeader;