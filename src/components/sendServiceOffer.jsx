import React, { useState, useEffect } from 'react';
import { MdOutlineTimer, MdOutlineLocalOffer } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import FinalServiceOffer from './serviceOffer';


export default function SendServiceOffer() {
    const [showAnotherComponent, setShowAnotherComponent] = useState(false);

    useEffect(() => {
        // Event listener for handling browser back button
        const handlePopState = (event) => {
            // Check if the current state should show the default view
            if (window.history.state === null || !window.history.state.showAnotherComponent) {
                setShowAnotherComponent(false);
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const handleCreateOfferClick = () => {
        // Push a new state into the history when showing ChooseServiceOffer
        window.history.pushState({ showAnotherComponent: true }, '');
        setShowAnotherComponent(true);
    };

    if (showAnotherComponent) {
        return <FinalServiceOffer />;
    }


    return (
        <div className="w-3/5 px-4 py-2 bg-white rounded-lg shadow-md my-2" style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: '10px', background: '#FFF' }}>


            <div className="flex justify-between items-center my-4">
                <div className="flex items-center">

                    <FontAwesomeIcon icon={faPercent} className="text-teal-500" size="1.5em" />

                    <span className="ml-2 text-teal-500">Create an offer</span>
                </div>
            </div>

            <div className="items-center">
                {/* <label htmlFor="message-box" className="block text-sm font-medium text-gray-700">Write about yourself</label> */}
                <textarea
                    id="message-box"
                    className="mt-1 block h-32 w-full border border-green-800 p-1 rounded-md shadow-sm"
                    placeholder="Describe your offer here..."
                />
            </div>

            <div className="flex justify-between items-center my-4 text-black">

                <div className="w-1/2 relative mr-2">
                    <label htmlFor="delivery-time" className="block text-sm font-medium text-gray-700">Delivery</label>
                    <div className="mt-1 relative block w-full">
                        <select id="delivery-time" className="block w-full border border-green-800 p-1 rounded-md shadow-sm appearance-none pl-3 pr-10">
                            <option value="1 day">1 day</option>
                            <option value="3 days">3 days</option>
                            <option value="1 week">1 week</option>
                            <option value="2 weeks">2 weeks</option>
                            <option value="1 month">1 month</option>
                        </select>
                        <FontAwesomeIcon icon={faCaretDown} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>

                <div className="w-1/2 mr-2">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="text" id="last-name" className="mt-1 block w-full border border-green-800 p-1 rounded-md shadow-sm" />
                </div>

                <div className="w-1/2 relative">
                    <label htmlFor="delivery-time" className="block text-sm font-medium text-gray-700">Offer Expires In</label>
                    <div className="mt-1 relative block w-full">
                        <select id="delivery-time" className="block w-full border border-green-800 p-1 rounded-md shadow-sm appearance-none pl-3 pr-10">
                            <option value="1 day">1 day</option>
                            <option value="3 days">3 days</option>
                            <option value="1 week">1 week</option>
                            <option value="2 weeks">2 weeks</option>
                            <option value="1 month">1 month</option>
                        </select>
                        <FontAwesomeIcon icon={faCaretDown} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>

            </div>

            <div className='flex justify-end'>
                <button onClick={handleCreateOfferClick} className="w-1/4 bg-teal-500 text-sm text-white rounded-md py-2 mb-2 hover:bg-teal-600">
                    Send Offer
                </button>
            </div>


        </div>
    );
}
