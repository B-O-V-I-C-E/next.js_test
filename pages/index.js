import Image from "next/image";
import Link from "next/link";
import CTA from "../comps/CTA";
import styles from "../styles/Home.module.css";
import { motion, AnimatePresence } from "framer-motion"

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

export default function Home() {
  return (
    <>
      <AnimatePresence><motion.div className={[styles.hero, "section"].join(" ")} 
      variants={container} initial="hidden" whileInView={"show"} exit={{ scaleY: 0 }}>
        <motion.div className="row" variants={item}>
          <div className="col">
            <h1>Welcome Home</h1>
          </div>
        </motion.div>
      </motion.div></AnimatePresence>

      <div className="section">

        <div className="row">

          <div className="col">

            <motion.div className="text_block left" variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true}}>
              <motion.h2 variants={item}>This is the first section</motion.h2>
              <motion.p variants={item}> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                Donec tincidunt purus nisi, in fermentum nibh efficitur sit amet. Sed aliquet, est in tincidunt consequat, quam lorem varius eros, eu
                luctus purus tortor eu arcu.</motion.p>
              <motion.div variants={item} className="button"><Link href={"/contact"}><a>Get Started</a></Link></motion.div>
            </motion.div>
          </div>

          <div className="col">
            <Image src="/City.svg" width={1500} height={736} />
          </div>

        </div>

        <div className="row">

          <div className="col">
            <Image src="/City.svg" width={1500} height={736} />
          </div>

          <div className="col">
          <motion.div className="text_block right" variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true }}>
              <motion.h2 variants={item}>This is the first section</motion.h2>
              <motion.p variants={item}> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                Donec tincidunt purus nisi, in fermentum nibh efficitur sit amet. Sed aliquet, est in tincidunt consequat, quam lorem varius eros, eu
                luctus purus tortor eu arcu.</motion.p>
              <motion.div variants={item} className="button"><Link href={"/contact"}><a>Get Started</a></Link></motion.div>
            </motion.div>
          </div>

        </div>

      </div>

      <CTA/>
    </>
  )
}
