import Image from "next/image";
import Link from "next/link";
import CTA from "../../comps/CTA";
import subpage from "../../styles/Subpage.module.css";

const Services = () => {
    return ( 
        <>
            <div className={[subpage.subPageHeader, "section"].join(" ")}>
                <div className="row">
                    <div className="col">
                        <h1>Our Services</h1>
                        <p>Sed vitae finibus ipsum, ut vehicula risus</p>
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
                                luctus purus tortor eu arcu.</p>
                            <div className="button"><Link href={"/contact"}><a>Get Started</a></Link></div>
                        </div>
                    </div>

                    <div className="col">
                        <Image src="/City.svg" width={1500} height={736} />
                    </div>

                </div>

                <div className="row">

                    <div className="col">

                        <div className="text_block left">
                            <h2>This is the second section</h2>
                            <p> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                                Donec tincidunt purus nisi, in fermentum nibh efficitur sit amet. Sed aliquet, est in tincidunt consequat, quam lorem varius eros, eu
                                luctus purus tortor eu arcu.</p>
                            <div className="button"><Link href={"/contact"}><a>Get Started</a></Link></div>
                        </div>
                    </div>

                    <div className="col">
                        <Image src="/City.svg" width={1500} height={736} />
                    </div>

                </div>

                <div className="row">

                    <div className="col">

                        <div className="text_block left">
                            <h2>This is the third section</h2>
                            <p> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                                Donec tincidunt purus nisi, in fermentum nibh efficitur sit amet. Sed aliquet, est in tincidunt consequat, quam lorem varius eros, eu
                                luctus purus tortor eu arcu.</p>
                            <div className="button"><Link href={"/contact"}><a>Get Started</a></Link></div>
                        </div>
                    </div>

                    <div className="col">
                        <Image src="/City.svg" width={1500} height={736} />
                    </div>

                </div>

            </div>

            <CTA />
        </>
     );
}
 
export default Services;