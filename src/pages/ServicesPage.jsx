import React from 'react';

const ServicesPage = () => {
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-3xl p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h1>
                <p className="text-gray-700 mb-6">
                    We offer a range of services to meet your needs. Whether you're looking for ways to streamline
                    communication, share files, or enhance productivity, we've got you covered. Here are some of
                    the services we provide:
                </p>
                <ul className="list-disc list-inside">
                    <li className="text-gray-700 mb-2">Cross-device Text Sharing</li>
                    <li className="text-gray-700 mb-2">File Synchronization</li>
                    <li className="text-gray-700 mb-2">Cloud Integration</li>
                    <li className="text-gray-700 mb-2">Task Management Solutions</li>
                    <li className="text-gray-700 mb-2">Collaboration Tools</li>
                </ul>
                <p className="text-gray-700 mt-6">
                    These are just a few examples of the services we offer. We are continuously innovating and
                    expanding our offerings to better serve our users. Stay tuned for more updates!
                </p>
            </div>
        </div>
    );
};

export default ServicesPage;