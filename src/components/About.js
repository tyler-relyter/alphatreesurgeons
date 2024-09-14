import React from "react";
import "./css/fonts.css";


const About = () => {
    return (
        <div id="about" style={{fontFamily: 'Sedan'}}>
            <div className="container-lg bg-light">
                <div className="row border">
                    <h1 className="display-1 text-center bg-dark text-white"><i className="fas fa-tree text-white m-2"></i>About Us<i className="fas fa-tree text-white m-2"></i></h1>
                    <p className="text-center p-3 m-3 fs-3">Alpha Tree Surgeons is a local family owned and operated business serving the Wilmington, NC and surrounding areas.<br />
                     We are fully insured and licensed to provide tree and landscaping services in the state of North Carolina.<br /> 
                    We provide tree removal, tree trimming, lot clearing, and storm damage cleanup (24/7 Emergency Service).<br /> 
                    We are proud to be a part of the Wilmington community and we look forward to serving you.</p>
                </div>
                <div className="row border">
                    
                        <h3 className="display-4 text-center p-3 m-3">Experienced and Knowledgeable</h3>
                        <p className="text-center p-3 m-3 fs-3">We specialize in helping clients increase the value and beauty of their homes by maintaining the trees<br /> throughout one's property.
                         We also keep the customer updated on the health of certain trees<br /> and how we should move forward if action is needed. Our ultimate goal is to ensure<br /> that you are 
                        completely satisfied with the end result of your project.</p>
                </div>
                <div className="row border">
                    
                        <h3 className="display-4 text-center p-3 m-3">We Care About the Details</h3>
                        <p className="text-center p-3 m-3 fs-3">&nbsp;&nbsp;&nbsp;&nbsp;Our company pays special attention to the details of every project to ensure the<br/> complete satisfaction of each client. 
                        Our goal is to enhance the exterior of your home,<br/> raise your property value, and beautify your whole neighborhood.</p>
                    
                </div>
                <div className="row border">
                    <h3 className="display-4 text-center p-3 m-3">Customer Satisfaction Guaranteed</h3>
                    <p className="text-center p-3 m-3 fs-3">Your satisfaction is our priority and we strive to provide a service we are proud of.<br/> We start every project by providing a thorough consultation to understand
                     your goals and the needs of the project.<br/> We do this to guarantee that the project is completed according to your preferences.</p>
                </div>
                        
            </div>
        </div>
    )
}

export default About;