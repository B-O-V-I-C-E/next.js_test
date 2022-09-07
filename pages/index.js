import Image from "next/image";
import Link from "next/link";
import CTA from "../comps/CTA";
import styles from "../styles/Home.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../comps/Card";

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

export default function Home() {
  return (
    <>
      <AnimatePresence><motion.div className={[styles.hero, "section"].join(" ")}
        variants={container} initial="hidden" whileInView={"show"} exit={{ scaleY: 0 }} viewport={{ amount: "some", margin: "-150px" }}>
        <div className="row">
          <div className="col">
            <motion.h1 variants={item}>Welcome Home</motion.h1>
            <motion.p variants={item}>Add your subpage description here</motion.p>
            <motion.div variants={item} className="button"><Link href={"/contact"}><a>Get Started</a></Link></motion.div>
          </div>
        </div>
      </motion.div></AnimatePresence>

      <div className="section">
        <div className="row">

          <div className="col">
            <Card title="Card 1" desc="Put your card description here"/>
          </div>

          <div className="col">
            <Card title="Card 2" desc="Put your card description here"/>
          </div>

          <div className="col">
            <Card title="Card 3" desc="Put your card description here"/>
          </div>

          <div className="col">
            <Card title="Card 4" desc="Put your card description here"/>
          </div>

        </div>
      </div>

      <div className="section">

        <div className="row">

          <div className="col">

            <motion.div className="text_block left" variants={container} initial={"hidden"} whileInView={"show"} viewport={{ amount: "some", margin: "-150px", once: true }}>
              <motion.h2 variants={item}>This is the first section</motion.h2>
              <motion.p variants={item}> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at. Donec tincidunt 
              purus nisi, in fermentum nibh efficitur sit amet. Sed aliquet, est in tincidunt consequat, quam lorem varius eros, eu luctus purus tortor eu arcu.</motion.p>
              <motion.div variants={item} className="button"><Link href={"/contact"}><a>Get Started</a></Link></motion.div>
            </motion.div>
          </div>

          <div className="col">
            <Image src="/City.svg" width={1500} height={736} alt="Test Image"/>
          </div>

        </div>

        <div className="row">

          <div className="col">
            <Image src="/City.svg" width={1500} height={736} alt="Test Image"/>
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

      <CTA />
    </>
  )
}
