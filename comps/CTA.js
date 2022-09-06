import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

const CTA = () => {
    return (        
        <AnimatePresence><motion.div className={"section cta"}
            variants={container} initial="hidden" whileInView={"show"} exit={{ scaleY: 0 }} viewport={{ amount: "some", margin: "-200px" }}>

            <div className="row">
                <div className="col">
                    <motion.h2 variants={item}>Ready to Get Started?</motion.h2>
                    <motion.p variants={item}>Est in tincidunt consequat, quam lorem varius eros, eu luctus purus tortor eu arcu. Fusce hendrerit faucibus gravida. Duis massa dolor,
                        elementum sit amet cursus et, finibus ac tellus. Sed vitae finibus ipsum, ut vehicula risus.</motion.p>
                    <motion.div variants={item} className="button"><Link href={"/contact"}><a>Get Started</a></Link></motion.div>
                </div>
            </div>

        </motion.div></AnimatePresence>
    );
}

export default CTA;