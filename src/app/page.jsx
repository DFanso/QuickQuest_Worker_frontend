"use client"
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/globals.css';

const OrderCard = ({ profilePic, name, task, dueDate, price }) => {
  return (
    <div className="flex flex-col sm:flex-row mt-4 mx-4 sm:mx-20 items-center justify-between p-4 bg-white rounded text-black shadow" style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: '5px' }}>
      <img src={profilePic} alt={name} className="rounded-full h-12 w-12 mb-4 sm:mb-0" />
      <span>{name}</span>
      <span className="flex items-center">
        <img src="/images/construction-icon.png" alt="Task Icon" className="h-6 w-6 mr-2" />
        {task}
      </span>
      <span>Due on {dueDate}</span>
      <span>{price}</span>
      <div className='flex md:mt-0 mt-2'>
        <button className="bg-teal-500 hover:bg-teal-800 duration-700 text-white py-1.5 px-4 rounded">Completed</button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [orders, setOrders] = useState([

    {
      profilePic: "/images/test-prof-1.png",
      name: "Tush Sanuth",
      task: "Industrial Construction",
      dueDate: "01/04/2024",
      price: "$300"
    },

    {
      profilePic: "/images/test-prof-1.png",
      name: "Tush Sanuth",
      task: "Industrial Construction",
      dueDate: "01/04/2024",
      price: "$300"
    },
    {
      profilePic: "/images/test-prof-1.png",
      name: "Tush Sanuth",
      task: "Industrial Construction",
      dueDate: "01/04/2024",
      price: "$300"
    },
    {
      profilePic: "/images/test-prof-1.png",
      name: "Tush Sanuth",
      task: "Industrial Construction",
      dueDate: "01/04/2024",
      price: "$300"
    },
    {
      profilePic: "/images/test-prof-1.png",
      name: "Tush Sanuth",
      task: "Industrial Construction",
      dueDate: "01/04/2024",
      price: "$300"
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-8">
        <h1 className="text-center text-2xl font-medium md:mb-14 mb-4 text-black">Order Dashboard</h1>
        <div className="flex md:flex-row flex-col justify-center space-x-2  md:space-x-14 mb-0">
          {/* Earnings card */}
          <div className="md:p-8 p-4 md:m-0 m-2 bg-teal-500 rounded text-white shadow" style={{ borderRadius: '10px', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)' }}>
            <div className="text-center">
              <h2 className="text-lg mb-4">Earnings to date</h2>
              <p className="text-3xl font-bold">$45.00</p>
            </div>
          </div>

          {/* Jobs Completed card */}
          <div className="md:p-8 p-4 md:m-0 m-2 bg-teal-500 rounded text-white shadow" style={{ borderRadius: '10px', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)' }}>
            <div className="text-center">
              <h2 className="text-lg mb-4">Total Jobs Completed</h2>
              <p className="text-3xl font-bold">13</p>
            </div>
          </div>

          {/* Ongoing Jobs card */}
          <div className="md:p-8 p-4 md:m-0 m-2 bg-teal-500 rounded text-white shadow" style={{ borderRadius: '10px', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)' }}>
            <div className="text-center">
              <h2 className="text-lg mb-4">Ongoing Jobs</h2>
              <p className="text-3xl font-bold">01</p>
            </div>
          </div>
        </div>


        <div className='mx-4 sm:mx-20 mb-8'>
          <h2 className="text-lg font-medium mt-8 mb-6" style={{ textAlign: 'left' }}>Ongoing Orders</h2>
          {orders.map((order, index) => (
            <OrderCard
              key={index}
              profilePic={order.profilePic}
              name={order.name}
              task={order.task}
              dueDate={order.dueDate}
              price={order.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
