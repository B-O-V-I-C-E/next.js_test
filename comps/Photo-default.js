import { filterProps, motion } from "framer-motion";
import Image from "next/image";

const container = {
    hidden: {
        opacity: 0,
        scale: .9,
    },
    show: {
        opacity: 1,
        scale: 1,
    }
}

const Photo_default = (props) => {
    return ( 
        <motion.div variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true }}>
            <Image src={props.s} width={props.w} height={props.h} alt={props.alt}/>
        </motion.div>
     );
}
 
export default Photo_default;