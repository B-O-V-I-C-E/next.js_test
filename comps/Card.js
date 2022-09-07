import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
const icon = require('../public/Test-Icon.png');

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
        translateY: '16px',
    },
    show: {
        opacity: 1,
        scale: 1,
        translateY: '0px',
    },
}

const icon = {
    hidden: {
        opacity: 0,
        scale: .1,
    },
    show: {
        opacity: 1,
        scale: 1,
    },
}

const Card = (props) => {
    return ( 
        <motion.div className={styles.card} variants={container} initial="hidden" whileInView={"show"} viewport={{ amount: "some", margin: "-150px" }}>
            <motion.div variants={icon}><Image src={"/Test-icon.png"} width="60px" height="60px" /></motion.div>
            <motion.div variants={item}><h3>{props.title}</h3></motion.div>
            <motion.div variants={item}><p>{props.desc}</p></motion.div>
        </motion.div>
     );
}
 
export default Card;