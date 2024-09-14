import React, { useState, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import nicetree_b4 from "../img/nice_trimb4.jpg";
import brad from "../img/brad.jpg";
import nicetree from "../img/nice_trim.jpg";
import brad_stump from "../img/brad_stump.jpg";
import "./css/home.css";
import "./css/fonts.css";
import saw from "../img/chainsaw.svg";
import "./css/saw_icon.css";
import climbpine2 from "../img/climb_pine2.jpg";
import climbtree from "../img/climb_tree.jpg";
import action_between from "../img/action_between.jpg";
import bradToppingTree from "../img/brad_cutting_top.mp4"
import lowering_pinetop from "../img/lowering_pinetop.jpg";
import Gallery from "./Gallery";
import FullscreenImage from "./Fullscreen";


const Home = () => {
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.scrollY > 400){
                setShowScroll(true)
            } else if (showScroll && window.scrollY <= 400){
                setShowScroll(false)
            }
        };

        window.addEventListener('scroll', checkScrollTop)
        return () => window.removeEventListener('scroll', checkScrollTop)
    }, [showScroll]);

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div>
            <div className="container-fluid">
                <h1 className="display-1 text-center p-3 m-3"><b>Welcome to Alpha Tree Surgeons</b></h1>
                <div className="">
                    <div id="brad-image">
                        <FullscreenImage src={brad} className="img-fluid m-5 p-3" alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <img id="saw" src={saw} alt="chaimnsaw icon" className="img-fluid m-2" />
                    </div>
                    <div className="col">
                        <a href="#contact" className="custom-link"><h3 className="display-3 bg-dark text-white text-center p-3 m-3"><b>CALL FOR A FREE ESTIMATE!</b></h3></a>
                    </div>
                    <div className="col text-center">
                        <img id="saw" src={saw} alt="chaimnsaw icon" className="img-fluid m-2" />
                    </div>
                </div>
                
                <h6 className="text-center text-uppercase display-1 p-3 m-3">Trust us with your projects</h6>
                <p className="text-center fs-2 p-3 m-2 fw-bold">"We do it all in just one call"</p>
                <div className="row">
                    <h6 className="text-center p-3 m-3 display-2 bg-dark text-white"><i className="fas fa-tree text-white m-2"></i>SERVICES<i className="fas fa-tree text-white m-2"></i></h6>
                </div>
                <div className="row" style={{fontFamily: 'Sedan'}}>
                    <div className="col border border-success border-3">
                        <h3 className="display-3 text-center p-3 m-3">Removal</h3>
                        <p className="text-center fs-3 p-3 m-3">Alpha Tree Surgeons is a company that specializes in tree removal. We have the proper tools and equipment to remove trees safely and efficiently, going 
                        above and beyond to keep your property intact. This includes existing landscapes, flowers, grass, or other items.</p>
                    </div>
                    <div className="col border border-success border-3">
                        <h2 className="display-3 text-center p-3 m-3">Pruning</h2>
                        <p className="text-center fs-3 p-3 m-3">Do your trees and shrubs need a haircut? We can do that and more. Alpha Tree strives to keep their customers informed on proper pruning practices and their benefits on tree health in the future. At your consultation,
                        we will walk your property to determine your pruning and tree trimming needs.</p>
                    </div>
                    <div className="col border border-success border-3">
                        <h3 className="display-3 text-center p-3 m-3">Consultations</h3>
                        <p className="text-center fs-3 p-3 m-3">Chat with a pro at Alpha Tree to determine the health of the trees on your property. We provide a detailed plan on what should be done to keep the trees on your property
                        safe and disease-free. <a href="#contact">Call us</a> today and we'll send one of our experts to walk through and show you potential spots of decay, underlying illnesses, issues with bark or cambium layer, pests, etc.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h3 className="display-3 text-center p-3 m-3">Our Work in Action</h3>
                        <div id="carouselTree" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active" id="videoContainer">
                                    <video controls={true} style={{ width: '100%', height: 'auto' }}>
                                        <source src={bradToppingTree} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="carousel-item">
                                    <FullscreenImage src={nicetree_b4} className="img-fluid d-block w-100 carousel-pic" alt="Tree Surgeons" />
                                </div>
                                <div className="carousel-item">
                                    <FullscreenImage src={nicetree} className="img-fluid d-block w-100 carousel-pic" alt="Tree Surgeons" />
                                </div>
                                <div className="carousel-item">
                                    <FullscreenImage src={action_between} className="img-fluid d-block w-100 carousel-pic" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <FullscreenImage src={climbtree} className="img-fluid d-block w-100 carousel-pic" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <FullscreenImage src={lowering_pinetop} className="img-fluid d-block w-100 carousel-pic" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <FullscreenImage src={climbpine2} className="img-fluid d-block w-100 carousel-pic" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <FullscreenImage src={brad_stump} className="img-fluid d-block w-100 carousel-pic" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselTree" data-bs-slide="prev">
                                <i className="fas fa-chevron-left" style={{color: "black"}}></i>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselTree" data-bs-slide="next">
                                <i className="fas fa-chevron-right" style={{color: "black"}}></i>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col"></div>

                </div>
            </div>
            <About />
            <Contact />
            <Gallery />
            <div className="justify-content-center">
                <button className={`scrollTop ${showScroll ? 'show' : ''}`} onClick={scrollTop}>
                    <i className="fas fa-chevron-up">Top of page</i>
                </button>
            </div>
            <footer className="bg-dark text-white text-center p-3 m-3">
                <p className="fs-2">Alpha Tree Surgeons &copy; 2021 | 910.520.8878 | alpha.tree@yahoo.com</p>
            </footer>
        </div>

    )
}



export default Home;