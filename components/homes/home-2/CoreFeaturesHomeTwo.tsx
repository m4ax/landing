import Link from "next/link";
import Image from "next/image";
import core_features_data from "../../data/core-features-data";


interface features_content_type {
    title: string;
    sub_title: string;
}
const features_content:features_content_type = {
    title: "It's Simple",
    sub_title: "Borem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
}
const {title, sub_title} =  features_content

const CoreFeaturesHomeTwo = () => {
    return (
        <>
            <section className="core-features-area white-bg pt-115 pb-60">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div>
                            <div className="section-title text-center mb-40">
                                <h2>{title}</h2>
                                {/* <p>{sub_title}</p> */}
                            </div>
                            <div className="section-title text-center mb-150">
                            <h2>It's Seamless</h2>
                            </div>
                        </div>
                        {/* <div className="col-xl-6 col-lg-4">
                            <div className="section-link text-left text-lg-right mb-30">
                                <Link href="#" className="btn btn-soft-border">Learn More</Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        {core_features_data.map((item, i) => 
                            <div key={i} className="col-xl-6 col-lg-6">
                                <div className="features-box mb-60 wow fadeIn" data-wow-delay={item.delay}>
                                    <div className="core-features-icon">
                                        <Image src={item.img} alt={item.title} />
                                    </div>
                                    <div className="services-content core-features-content">
                                        <h4>{item.title}</h4>
                                        <h6 className="sub">{item.sm_des}</h6>
                                    </div>
                                </div>
                            </div>                        
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoreFeaturesHomeTwo;