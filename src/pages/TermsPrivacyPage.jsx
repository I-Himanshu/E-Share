import React from 'react';

const TermsPrivacyPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center w-full">
            <div className="max-w-3xl p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Terms of Service and Privacy Policy</h1>
                <div className="text-gray-700 mb-6">
                    <h2 className="font-semibold mb-2">Terms of Service</h2>
                    <p>
                        Welcome to LinkSync! These terms and conditions outline the rules and regulations for the use of
                        LinkSync's Website, located at www.linksync.com.
                    </p>
                    {/* Additional terms of service content goes here */}
                </div>
                <div className="text-gray-700 mb-6">
                    <h2 className="font-semibold mb-2">Privacy Policy</h2>
                    <p>
                        We employ the use of cookies. By accessing LinkSync, you agreed to use cookies in agreement with
                        the LinkSync's Privacy Policy.
                    </p>
                    {/* Additional privacy policy content goes here */}
                </div>
                <div className="text-gray-700 mt-6">
                    <h2 className="font-semibold mb-2">Disclaimer</h2>
                    <p>
                        To the maximum extent permitted by applicable law, we exclude all representations, warranties, and
                        conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>limit or exclude our or your liability for death or personal injury;</li>
                        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                    </ul>
                    {/* Additional disclaimer content goes here */}
                </div>
            </div>
        </div>
    );
};

export default TermsPrivacyPage;
