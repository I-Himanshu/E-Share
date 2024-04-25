import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-full flex flex-col justify-center items-center">
            <div className="max-w-4xl p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
                <p className="text-gray-700 mb-6">
                    Welcome to our website! We are dedicated to making your life easier by providing simple solutions
                    to everyday tasks. Our goal is to create tools and services that streamline processes and enhance
                    productivity.
                </p>
                <p className="text-gray-700 mb-6">
                    Our team is passionate about technology and innovation. We believe in the power of
                    collaboration and constantly strive to develop new and improved solutions to meet the needs of
                    our users.
                </p>
                <p className="text-gray-700 mb-6">
                    Whether you're looking for ways to share text and files between devices or seeking efficient
                    ways to manage your tasks, our website has something for everyone. We are committed to
                    providing valuable resources and creating a positive user experience.
                </p>
                <p className="text-gray-700 mb-6">
                    Thank you for visiting us! Feel free to explore our website and reach out to us if you have any
                    questions or feedback. We look forward to serving you and helping you simplify your life.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
