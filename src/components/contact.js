import React from "react";




 const ContactForm = () =>{
    return(  
 <>
    <section id="contact">
        <h2>Contact Us</h2>
            <form className="contact-form" action="#" >
                <label for="name">Name:</label>
                <input type="text" id="name"name="name" required/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
    </section>
 </>

    )
}

export default ContactForm;