import React from "react";
import "./css/nav.css";



const Navbar = () => { 
    
    return (
        
            <nav id="nav" className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <div className="dropdown justify-content-start">
                                <button className="btn btn-lg btn-white border border-white text-white dropdown dropdown-toggle m-3 p-2" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Menu</button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href='/'>Home</a>
                                    <a className="dropdown-item" href='/#about'>About</a>
                                    <a className="dropdown-item" href='/#contact'>Contact Us</a>
                                    <a className="dropdown-item" href='/#gallery'>Gallery</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <h1 className="display-5 text-white text-uppercase m-2"><i className="fas fa-tree text-white m-2"></i><strong><b>Alpha Tree Surgeons</b></strong></h1>
                        </div>
                        
                        <div className="col-auto">
                            <div className="">
                                <div className="row text-sm-left">
                                    <p className="fs-2 mx-5"><a id="phone-link" href="tel:+19105208878">+1-910-520-8878</a></p>
                                </div>

                            </div>
                        </div>
                        <div className="col-auto">
                            <a href="https://www.facebook.com/AlphaTreeSurgeons?mibextid=ZbWKwL"><i id="fb-link" className="fab fa-facebook-square fa-3x m-2"></i></a>
                            <br/>
                            <a href="https://www.instagram.com/alpha.tree910/"><i id="ig-link" className="fab fa-instagram-square fa-3x m-2"></i></a>
                        </div>
                    </div>
                    
                </div>
            </nav>
        
    );
}

export default Navbar;