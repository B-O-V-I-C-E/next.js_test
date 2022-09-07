import Image from "next/image";
import Link from "next/link";
import CTA from "../../comps/CTA";
import SubpageHeader from "../../comps/Subpage-head";
import subpage from "../../styles/Subpage.module.css";
import { motion } from "framer-motion";
import Photo_default from "../../comps/Photo-default";

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
        translateX: '-50px',
    },
    show: {
        opacity: 1,
        scale: 1,
        translateX: '0px',
    },
}

const About = () => {
    return (
        <>
            <SubpageHeader title="About Us" desc="Add your subpage description here." />

            <div className={[subpage.standout, "section"].join(" ")}>

                <div className="row">

                    <div className="col">

                        <motion.div className="text_block left" variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true }}>
                            <motion.h2 variants={item}>This Is the First Section</motion.h2>
                            <motion.p variants={item}> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                                Donec tincidunt purus nisi, in fermentum nibh efficitur sit amet. Sed aliquet, est in tincidunt consequat, quam lorem varius eros, eu
                                luctus purus tortor eu arcu.</motion.p>
                            <motion.div variants={item} className="button"><Link href={"/contact"}><a>Get Started</a></Link></motion.div>
                        </motion.div>

                    </div>

                    <div className="col">
                        <Photo_default s="/City.svg" w="1500" h="736" alt="Test Image" />
                    </div>

                </div>

            </div>

            <div className="section">

                <div className="row">

                    <div className="col">

                    <motion.div className="text_block left" variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true }}>
                            <motion.h2 variants={item}>This Is the Second Section</motion.h2>
                            <motion.p variants={item}> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                                Donec tincidunt purus nisi, in fermentum nibh efficitur sit amet. Sed aliquet, est in tincidunt consequat, quam lorem varius eros, eu
                                luctus purus tortor eu arcu.</motion.p>
                            <motion.div variants={item} className="button"><Link href={"/contact"}><a>Get Started</a></Link></motion.div>
                        </motion.div>
                    </div>

                    <div className="col">
                        <Photo_default s="/City.svg" w="1500" h="736" alt="Test Image" />
                    </div>

                </div>

                <div className="row close">

                    <div className="col">

                        <motion.div className="text_block left" variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true }}>
                            <motion.h3 variants={item}>This Is a Blurb</motion.h3>
                            <motion.p variants={item}>Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, 
                            in imperdiet nulla viverra at. Donec tincidunt purus nisi.</motion.p>
                        </motion.div>

                    </div>

                    <div className="col">

                        <motion.div className="text_block right" variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true }}>
                            <motion.h3 variants={item}>This Is a Blurb</motion.h3>
                            <motion.p variants={item}>Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, 
                            in imperdiet nulla viverra at. Donec tincidunt purus nisi.</motion.p>
                        </motion.div>

                    </div>

                </div>

                <div className="row close">

                    <div className="col">

                        <motion.div className="text_block left" variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true }}>
                            <motion.h3 variants={item}>This Is a Blurb</motion.h3>
                            <motion.p variants={item}>Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, 
                            in imperdiet nulla viverra at. Donec tincidunt purus nisi.</motion.p>
                        </motion.div>

                    </div>

                    <div className="col">

                        <motion.div className="text_block right" variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true }}>
                            <motion.h3 variants={item}>This Is a Blurb</motion.h3>
                            <motion.p variants={item}>Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, 
                            in imperdiet nulla viverra at. Donec tincidunt purus nisi.</motion.p>
                        </motion.div>

                    </div>

                </div>

                <div className="row">

                    <div className="col">
                        <Photo_default s="/City.svg" w="1500" h="736" alt="Test Image" />
                    </div>

                    <div className="col">

                        <motion.div className="text_block right" variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true }}>
                            <motion.h2 variants={item}>This Is the Third Section</motion.h2>
                            <motion.p variants={item}> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                                Donec tincidunt purus nisi, in fermentum nibh efficitur sit amet. Sed aliquet, est in tincidunt consequat, quam lorem varius eros, eu
                                luctus purus tortor eu arcu.</motion.p>
                        </motion.div>

                    </div>

                </div>

            </div>

            <CTA />
        </>
    );
}

export default About;