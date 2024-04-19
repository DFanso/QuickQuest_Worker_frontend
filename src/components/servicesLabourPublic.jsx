import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/globals.css';

export default function LabourPageServices({ worker }) {
  const [viewAll, setViewAll] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (worker) {
      setServices(worker.services);
    }
  }, [worker]);

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  return (
    <div className="mx-auto mt-4 py-4 md:py-2 max-w-screen-2xl px-2 md:px-20">
      <h2 className="text-lg pl-4 font-medium md:mb-6 mb-2 text-left text-black">Services</h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
        {services.slice(0, viewAll ? services.length : 3).map((service, index) => (
          <div key={index} className="relative p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <button className="absolute top-0 right-0 m-2 bg-teal-500 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={faTimes} className="text-white" />
              </button>
              <img src={service.imageUrl} alt={service.name} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-black">{service.name}</h3>
                <p className="text-gray-500">Starting at ${service.startingPrice}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="p-4">
          <div className="flex flex-col items-center justify-center bg-white h-80 rounded-lg overflow-hidden shadow-md">
            <button className="bg-teal-500 text-white rounded-full p-2 flex items-center justify-center h-12 w-12 mb-2">
              {/* Adjusted padding and set height/width */}
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span className="text-black">Add a new service</span>
            {/* Added text below the rounded icon */}
          </div>
        </div>
      </div>
      {!viewAll && services.length > 3 && (
        <div className="text-center">
          <button onClick={handleViewAll} className="mt-4 bg-teal-500 text-white px-6 py-2 rounded-md shadow-md inline-block">
            View All
          </button>
        </div>
      )}
    </div>
  );
}