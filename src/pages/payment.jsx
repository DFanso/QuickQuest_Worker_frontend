import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/globals.css';


const PaymentMethodPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-black">
                <div className="text-2xl font-bold mb-6">Payment Method</div>
                <div className="text-lg font-semibold mb-4">Connect with Paypal</div>
                <button className="flex items-center justify-center bg-[#FFC43A] text-black font-bold py-2 px-4 rounded-md shadow-lg mb-6">
                    <FontAwesomeIcon icon={faPaypal} size="lg" className="mr-2" />
                    PayPal
                </button>
                <div className="text-center text-sm">
                    Connect Your PayPal Account to receive Payouts from your Jobs.
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PaymentMethodPage;
