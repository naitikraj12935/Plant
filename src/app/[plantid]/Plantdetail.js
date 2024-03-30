"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { naitikraj } from "../Config";

export default function PlantDetail({ plantid }) {
  const [details, setDetails] = useState(null);
  const [care, setCare] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://perenual.com/api/species/details/${plantid}?key=${naitikraj}`
        );
        setDetails(response?.data);
        fetchCare();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [plantid]);

  const fetchCare = async () => {
    try {
      const data = await axios.get(
        `https://perenual.com/api/species-care-guide-list?key=${naitikraj}&species_id=${plantid}`
      );
      setCare(data.data.data[0].section);
    } catch (error) {
      console.log(error);
    }
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Plant Info */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="relative w-full  h-60 mb-4">
            <Image
              src={details.default_image.original_url}
              layout="fill"
              objectFit="cover"
              alt="Plant Image"
            />
          </div>
          <h2 className="text-xl font-semibold text-green-400 text-center">
            {details.common_name}
          </h2>
          <p className="text-gray-600 mt-2">{details.description}</p>
        </div>

        {/* Plant Care */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Plant Care</h1>
          <div className="grid grid-cols-1 gap-4">
            {care.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  {item.type}
                </h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location & Hardiness Map */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Location</h1>
        <div className="flex flex-wrap gap-4">
          {details.origin.map((data, index) => (
            <span key={index} className="text-gray-700">
              {data}
            </span>
          ))}
        </div>
        <iframe
          className="w-full h-60 mt-4 bg-slate-500"
          src={`https://perenual.com/api/hardiness-map?species_id=${plantid}&size=og&key=${naitikraj}`}
          title="Hardiness Map"
        />
      </div>

      {/* Additional Details */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Additional Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Pest Susceptibility</h2>
            <div className="flex flex-wrap gap-2">
              {details.pest_susceptibility.map((data, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg">
                  {data}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Soil</h2>
            <div className="flex flex-wrap gap-2">
              {details.soil.map((data, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg">
                  {data}
                </span>
              ))}
            </div>
          </div>
          {/* Add more additional details sections as needed */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Sunlight</h2>
            <div className="flex flex-wrap gap-2">
              {details.sunlight.map((data, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg">
                  {data}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Pruning Month</h2>
            <div className="flex flex-wrap gap-2">
              {details.pruning_month.map((data, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg">
                  {data}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Other Name</h2>
            <div className="flex flex-wrap gap-2">
              {details.other_name.map((data, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg">
                  {data}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Propagation</h2>
            <div className="flex flex-wrap gap-2">
              {details.propagation.map((data, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg">
                  {data}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Watering</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg">
                {details.watering}
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Type</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg">
                {details.type}
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Medicinal</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg">
                {details.medicinal ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Growth Rate</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg">
                {details.growth_rate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
