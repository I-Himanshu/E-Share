import React from 'react';

const ContactPage = () => {
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-gray-700 mb-6">
                    We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel
                    free to reach out to us using the contact form below.
                </p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold">Your Name</label>
                        <input type="text" id="name" name="name" className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Your Email</label>
                        <input type="email" id="email" name="email" className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-semibold">Your Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
