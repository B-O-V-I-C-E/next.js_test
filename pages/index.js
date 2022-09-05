import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={[styles.hero, "section"].join(" ")}>
      <div className="row">
        <div className="col">
          <h1>Welcome Home</h1>
        </div>
      </div>
    </div>
  )
}
