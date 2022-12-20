import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.REACT_APP_EJ_SID}`, `${process.env.REACT_APP_EJ_TID}`, form.current, `${process.env.REACT_APP_EJ_PK}` )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id="contact" className='mx-auto' style={{maxWidth:"40rem"}}>
            <h2 className='my-6 text-center'> Contact Us</h2>
            {/* <Jotform src="https://form.jotform.com/223433440146447"></Jotform> */}
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1"  className="form-label">Name</label>
                    <input type="text" name="user_name" className="form-control"  placeholder="Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1"  className="form-label">Email</label>
                    <input type="email" name="user_email"  className="form-control"  placeholder="Email"/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" name="message"  rows="3"/>
                </div>
                <button type="submit" className="btn btn-primary mb-3 w-100">Submit</button>
            </form>       
        </div>
    );
};

export default Contact;