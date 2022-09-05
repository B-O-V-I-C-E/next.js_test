import Link from "next/link";

const CTA = () => {
    return (
        <div className="section cta">
            <div className="row">
                <div className="col">
                    <h2>Ready to Get Started?</h2>
                    <p> Est in tincidunt consequat, quam lorem varius eros, eu luctus purus tortor eu arcu. Fusce hendrerit faucibus gravida. Duis massa dolor,
                        elementum sit amet cursus et, finibus ac tellus. Sed vitae finibus ipsum, ut vehicula risus.</p>
                    <div className="button"><Link href={"/contact"}><a>Get Started</a></Link></div>
                </div>
            </div>
        </div>
    );
}

export default CTA;