import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import SendServiceOffer from './sendServiceOffer';

export default function ServiceOffer() {
    const [showSendServiceOffer, setShowSendServiceOffer] = useState(false);

    const handleCreateOfferClick = () => {
        setShowSendServiceOffer(true);  // Show SendServiceOffer and hide ServiceOffer
    };

    if (showSendServiceOffer) {
        return <SendServiceOffer />;
    }

    // Return the UI for creating service offers when showSendServiceOffer is false
    return (
        <div className="w-3/5 p-4 bg-white rounded-lg shadow-md my-4" style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: '10px', background: '#FFF' }}>
            <div className="flex justify-between items-center my-4">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faPercent} className="text-teal-500" size="1.5em" />
                    <span className="ml-2 text-teal-500">Create an offer</span>
                </div>
                <div className="flex items-center">
                    <button onClick={handleCreateOfferClick} className="flex flex-row sm:flex-row items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50">
                        <img src='/images/construction-icon.png' alt='service icon' className="w-6 h-6 mb-2 sm:mb-0 sm:mr-2" />
                        <span className="text-teal-500">Construction</span>
                    </button>
                </div>
                <div className="flex items-center">
                    <button onClick={handleCreateOfferClick} className="flex flex-row sm:flex-row items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50">
                        <img src='/images/hair-makeup-icon.png' alt='service icon' className="w-6 h-6 mb-2 sm:mb-0 sm:mr-2" />
                        <span className="text-teal-500">Hair & Makeup</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
