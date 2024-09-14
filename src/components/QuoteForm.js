import React, { useState } from "react";



const QuoteForm = () => {
    const [quote, setQuote] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setQuote({ ...quote, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://alphatreesurgeons.net/quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(quote),
            });
            //const data = await response.json();
            //console.log(data);
            if (response.status === 200) {
                alert("Quote Request Sent!");
                setQuote({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            } else {
                alert("Quote Request Failed!");
            }
        } catch (error) {
            console.error(error);
            alert("Quote Request Failed!");
        }
    }
    return (
        <div id="quote">
            <div className="container bg-light justify-content-center text-center">
                <h2 className="display-2 text-center p-3 m-3">Send A Request</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" value={quote.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" value={quote.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" className="form-control" id="phone" name="phone" value={quote.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="message">Message:</label>
                        <textarea className="form-control" id="message" name="message" value={quote.message} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default QuoteForm;