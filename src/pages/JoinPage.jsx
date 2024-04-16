import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import Slider from 'react-slick';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css';

// Mockup categories data, replace with actual data import or definition
const categories = [
  {
    id: 'construction',
    title: 'Construction',
    imageUrl: '/images/construction.png', // replace with your image path
    options: [
      'Residential construction',
      'Commercial construction',
      'Renovation and remodeling',
      'Renovation and remodeling',
      'Demolition services',
      'Carpentry services',
      'Painting',
      'Flooring installation',
      'Roofing services',


      // ... other options
    ],
  },
  {
    id: 'cleaning',
    title: 'Cleaning',
    imageUrl: '/images/cleaning.png', // replace with your image path
    options: [
      'Residential cleaning',
      'Commercial cleaning',
      'Window cleaning',
      'Carpet cleaning',
      'Deep cleaning services',
      'Move-in/Move-out cleaning',
      'Eco-friendly cleaning',
      'Upholstery cleaning',

      // ... other options
    ],
  },
  {
    id: 'gardening',
    title: 'Gardening',
    imageUrl: '/images/gardening.png', // replace with your image path
    options: [
      'Lawn mowing',
      'Hedge trimming',
      'Window cleaning',
      'Carpet cleaning',
      'Deep cleaning services',
      'Move-in/Move-out cleaning',
      'Eco-friendly cleaning',
      'Upholstery cleaning',
      // ... other options
    ],
  },
  {
    id: 'construction',
    title: 'Construction',
    imageUrl: '/images/construction.png', // replace with your image path
    options: [
      'Residential construction',
      'Commercial construction',
      'Renovation and remodeling',
      'Renovation and remodeling',
      'Demolition services',
      'Carpentry services',
      'Painting',
      'Flooring installation',
      'Roofing services',


      // ... other options
    ],
  },
  {
    id: 'cleaning',
    title: 'Cleaning',
    imageUrl: '/images/cleaning.png', // replace with your image path
    options: [
      'Residential cleaning',
      'Commercial cleaning',
      'Window cleaning',
      'Carpet cleaning',
      'Deep cleaning services',
      'Move-in/Move-out cleaning',
      'Eco-friendly cleaning',
      'Upholstery cleaning',

      // ... other options
    ],
  },
  {
    id: 'gardening',
    title: 'Gardening',
    imageUrl: '/images/gardening.png', // replace with your image path
    options: [
      'Lawn mowing',
      'Hedge trimming',
      'Window cleaning',
      'Carpet cleaning',
      'Deep cleaning services',
      'Move-in/Move-out cleaning',
      'Eco-friendly cleaning',
      'Upholstery cleaning',
      // ... other options
    ],
  },
  // ... more categories
];

const CategoryCard = ({ category, selectedCategory, setSelectedCategory }) => {
  return (
    <RadioGroup.Option value={category.id} as="div" className="w-full md:w-4/5 mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 md:mt-10">
      {({ checked }) => (
        <>
          <img className="w-full" src={category.imageUrl} alt={category.title} />
          <div className="px-6 py-4" onClick={() => setSelectedCategory(category.id)}>
            <div className="flex items-center">
              <div className={`w-4 h-4 rounded-full mr-2 border border-teal-500 ${checked ? 'bg-teal-500' : ''}`} />
              <span className="text-lg font-medium text-black">{category.title}</span>
            </div>
            <div className="mt-2">
              {category.options.map((option, index) => (
                <div key={index} className="flex items-center mt-1">
                  <input type="checkbox" id={`${category.id}-option-${index}`} className="w-4 h-4 text-teal-500 rounded border-gray-300 focus:ring-teal-500" />
                  <label htmlFor={`${category.id}-option-${index}`} className="ml-2 text-sm text-gray-600">{option}</label>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </RadioGroup.Option>
  );
};

export default function JoinPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id); // Default to the first category

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // TailwindCSS 'sm' breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // TailwindCSS 'md' breakpoint
        settings: 'unslick'
      }
    ]
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 w-full md:w-11/12">
        <h2 className="text-center md:text-2xl text-lg font-medium md:mt-6 mt-2 text-black">
          Choose the services you want to provide
        </h2>

        <RadioGroup value={selectedCategory} onChange={setSelectedCategory}>
          <div className="block sm:hidden">
            <Slider {...settings}>
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              ))}
            </Slider>
          </div>
          <div className="hidden sm:block">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              ))}
            </div>
          </div>
        </RadioGroup>
        <div className="flex justify-center mt-6">
          <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg md:mt-4 mt-4  md:mb-6 mb-6">
            Create Worker Account
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
