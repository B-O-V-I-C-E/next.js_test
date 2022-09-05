import Image from "next/image";
import Link from "next/link";
import CTA from "../../comps/CTA";
import subpage from "../../styles/Subpage.module.css";

const About = () => {
    return (
        <>
            <div className={[subpage.subPageHeader, "section"].join(" ")}>
                <div className="row">
                    <div className="col">
                        <h1>About Us</h1>
                        <p>Sed vitae finibus ipsum, ut vehicula risus</p>
                    </div>
                </div>
            </div>

            <div className={[subpage.standout, "section"].join(" ")}>

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

                <div className="row close">

                    <div className="col">

                        <div className="text_block left">
                            <h3>This is the first section</h3>
                            <p> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                                Donec tincidunt purus nisi.</p>
                        </div>

                    </div>

                    <div className="col">

                        <div className="text_block right">
                            <h3>This is the first section</h3>
                            <p> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                                Donec tincidunt purus nisi.</p>
                        </div>

                    </div>

                </div>

                <div className="row close">

                    <div className="col">

                        <div className="text_block left">
                            <h3>This is the first section</h3>
                            <p> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                                Donec tincidunt purus nisi.</p>
                        </div>

                    </div>

                    <div className="col">

                        <div className="text_block right">
                            <h3>This is the first section</h3>
                            <p> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                                Donec tincidunt purus nisi.</p>
                        </div>

                    </div>

                </div>

                <div className="row">

                    <div className="col">
                        <Image src="/City.svg" width={1500} height={736} />
                    </div>

                    <div className="col">

                        <div className="text_block right">
                            <h2>This is the first section</h2>
                            <p> Curabitur quis libero ullamcorper, vulputate ipsum non, malesuada ipsum. Nam facilisis tellus ante, in imperdiet nulla viverra at.
                                Donec tincidunt purus nisi, in fermentum nibh efficitur sit amet. Sed aliquet, est in tincidunt consequat, quam lorem varius eros, eu
                                luctus purus tortor eu arcu.</p>
                        </div>
                    </div>

                </div>

            </div>

            <CTA />
        </>
    );
}

export default About;