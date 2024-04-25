import React from 'react';

const FeaturesPage = () => {
    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-3xl p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Key Features</h1>
                <p className="text-gray-700 mb-6">
                    Our platform offers a variety of features designed to simplify your life and enhance your
                    productivity. Here are some of the key features:
                </p>
                <ul className="list-disc list-inside">
                    <li className="text-gray-700 mb-2">Cross-Device Text Sharing: Seamlessly share text between
                        your devices, eliminating the need for copy-pasting or sending emails to yourself.
                    </li>
                    <li className="text-gray-700 mb-2">File Synchronization: Sync your files across multiple
                        devices, ensuring you always have access to the latest version no matter where you are.
                    </li>
                    <li className="text-gray-700 mb-2">Cloud Integration: Integrate with popular cloud storage
                        services to easily access and manage your files from anywhere.
                    </li>
                    <li className="text-gray-700 mb-2">Task Management Solutions: Stay organized and on top of your
                        tasks with our intuitive task management tools.
                    </li>
                    <li className="text-gray-700 mb-2">Collaboration Tools: Collaborate effectively with your team
                        members, whether you're in the same room or miles apart.
                    </li>
                </ul>
                <p className="text-gray-700 mt-6">
                    These are just a few examples of the features our platform offers. We are constantly innovating
                    and adding new features to better serve our users' needs. Stay tuned for more updates!
                </p>
            </div>
        </div>
    );
};

export default FeaturesPage;
