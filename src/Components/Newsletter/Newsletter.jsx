import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
// import emailjs from 'emailjs-com';


const Newsletter = () => {
  const form = useRef();
  const {user} = useContext(AuthContext)
  // const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_ob45rhk', 'template_yvtkwfq', form.current, 'YsE6lpKl-Lo3A7LrF')
  //         .then((result) => {
  //             console.log(result.text);
  //             alert("Message sent successfully!");
  //         }, (error) => {
  //             console.log(error.text);
  //             alert("An error occurred, please try again.");
  //         });

  //     e.target.reset();
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your service ID, template ID, and user ID from Email.js
    const SERVICE_ID=import.meta.env.VITE_EMAILJS_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID=import.meta.env.VITE_EMAILJS_PUBLIC_TEMPLATE_ID;
    const USER_ID=import.meta.env.VITE_EMAILJS_PUBLIC_USER_ID;
    
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setError('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className="py-6 text-gray-800">
           
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-3xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4 text-base">Fill in the form to start a conversation</p>
                   
                </div>
                <form ref={form} onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1 text-base">Full name</span>
                        <input type="text" disabled name="name" placeholder={user?.displayName} value={user?.displayName} className="p-2 text-base block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-300" required />
                    </label>
                    <label className="block">
                        <span className="mb-1 text-base">Email address</span>
                        <input type="email" name="email" disabled placeholder={user?.email} value={user?.email} className="p-2 text-base block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-300" required />
                    </label>
                    <label className="block">
                        <span className="mb-1 text-base">Message</span>
                        <textarea name="message" rows="3" className="p-2 text-base block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-300" required></textarea>
                    </label>
                    <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-gray-800 text-white focus:ring-violet-400 hover:ring-violet-400">Submit</button>
                </form>
            </div>
        </section>
  );
};

export default Newsletter;
