import Image from "next/image";
import server_img from "../../../public/assets/img/slider/server.png";
interface hero_content_type {
    bg_img: string;
    sub_title: string;
    title: string;
}
const hero_content: hero_content_type = {
    bg_img: "/assets/img/slider/slide-bg.png",
    sub_title: "Streamline Any Data Migration Process",
    title: "Hello to Seamless Data Migration",
}
const {bg_img, sub_title, title} = hero_content

const HeroHomeOne = () => {
    return (
        <>
            <section className="slider-area">
                <div className="slider-ac">
                    <div className="single-slider slider-height" style={{backgroundImage: `url(${bg_img})`}}>
                        <div className="container-fluid">
                            <div className="row">
                            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                                    <div className="slider-text pt-180 text-center">
                                        <span className="d-block wow fadeInUp animated" data-wow-delay="0.3s">
                                            {sub_title}
                                        </span>
                                        <h2 className="wow fadeInUp animated" data-wow-delay="0.6s">
                                            {title}
                                        </h2>
                                        <div className="slider-btn wow fadeInUp animated" data-wow-delay="0.9s">
                                            <a href="#" className="btn">Get Started</a>
                                            <a href="#" className="btn btn-border">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slider-bottom-img wow fadeInUp animated" data-wow-delay="1.3s">
                                <Image src={server_img}  alt="serve-for-data-migration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroHomeOne;