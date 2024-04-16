import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BidCard = ({ title, description, expiryDate, budget, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-medium text-black text-lg mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-600 text-base font-medium mt-2">Expiry Date: {expiryDate}</p>
        <p className="text-gray-600 text-base font-medium">Budget: {budget}</p>
        <div className='flex items-center justify-center'>
          <button className="w-2/4 bg-teal-500 text-sm text-white rounded-md py-2 mb-2 hover:bg-teal-600 mt-4">
            Contact Customer
          </button>
        </div>
      </div>
    </div>
  );
};

const BidsList = ({ bids }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: "unslick"
      }
    ]
  };

  return (
    <div className='mb-10'>
      <div className="flex items-center justify-center mb-4">
        <div className="flex flex-row sm:flex-row items-center justify-center px-4 py-2 ">
          <img src='/images/construction-icon.png' alt='service icon' className="w-6 h-6 mb-2 sm:mb-0 sm:mr-2" />
          <span className="text-teal-500 text-2xl">Construction</span>
        </div>
      </div>

      <div className="block sm:hidden">
        <Slider {...settings}>
          {bids.map((bid, index) => (
            <div key={index} className="px-4">
              <BidCard {...bid} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden sm:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bids.map((bid, index) => (
            <BidCard key={index} {...bid} />
          ))}
        </div>
      </div>
    </div>
  );
};

const myBids = [
  {
    title: 'Lawn mowing',
    description: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    expiryDate: '2024/04/01',
    budget: '2024/04/01',
    imageUrl: '/images/lawn-mowing.png'
  },
  {
    title: 'Lawn mowing',
    description: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    expiryDate: '2024/04/01',
    budget: '2024/04/01',
    imageUrl: '/images/lawn-mowing.png'
  },
  {
    title: 'Lawn mowing',
    description: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    expiryDate: '2024/04/01',
    budget: '2024/04/01',
    imageUrl: '/images/lawn-mowing.png'
  },
  {
    title: 'Lawn mowing',
    description: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    expiryDate: '2024/04/01',
    budget: '2024/04/01',
    imageUrl: '/images/lawn-mowing.png'
  },

];

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <BidsList bids={myBids} />
    </div>
  );
};

export default App;
