import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <div className={[styles.hero, "section"].join(" ")}>
      <div className="row">
        <div className="col">
          <h1>Welcome Home</h1>
        </div>
      </div>
    </div>
    
    <div className="section">
        <div className="row">
          <div className="col">

            <div className="text_block left">
              <h2>This is the first section</h2>
              <p> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at. 
                Donec tincidunt purus nisi, in fermentum nibh efficitur sit amet. Sed aliquet, est in tincidunt consequat, quam lorem varius eros, eu 
                luctus purus tortor eu arcu. Fusce hendrerit faucibus gravida. Duis massa dolor, elementum sit amet cursus et, finibus ac tellus. Sed 
                vitae finibus ipsum, ut vehicula risus.</p>
            </div>

          </div>
          
          <div className="col">
            Image
          </div>
        </div>
    </div>
    </>
  )
}
