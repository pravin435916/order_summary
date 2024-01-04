import React, { useState } from 'react';
import girl from './assets/Girl-Listening-Music.png';
import { IoIosMusicalNotes } from "react-icons/io";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Card() {
  const [showPopup, setShowPopup] = useState(false);
  const [value, setValue] = useState(59.99);
  const [pay,setPay] = useState("Proceed to Payment")

  const send = () => {
    setPay("Payment Done ");
    toast.success("Payment Done Bhai");
  };
  const cancel = () => {
    toast.error("Cancel successful");
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const handleclick = () => {
    setValue(29.99);
    setShowPopup(false)
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-blue-100'>
      <div className='w-80 sm:w-96 h-max flex flex-col justify-center items-center border rounded-lg shadow-xl bg-white'>
        <div className='bg-blue-500 flex justify-center items-center w-full h-44 '>
          <img className='h-40 w-36' src={girl} alt="" />
        </div>
        <div className='flex justify-center items-center flex-col p-4 gap-4'>
          <span className='text-3xl font-bold'>Order Summary</span>
          <span className='text-xs text-gray-500 text-center px-10 py-5'>You can now listen to millions of songs, audiobooks, and podcasts on any device, anywhere you like.</span>
        </div>
        <div className='w-72 sm:w-80 h-14 border flex gap-2 p-4 justify-between items-center bg-blue-100 rounded-lg'>
          <div className='flex gap-2'>
            <span className='border bg-gray-300 rounded-full p-2'><IoIosMusicalNotes /></span>
            <div className='flex flex-col text-xs'>
              <span>Annual Plan</span>
              <span>${value}/year</span>
            </div>
          </div>
          <span className='underline cursor-pointer' onClick={openPopup}>Change</span>
        </div>

        {showPopup && (
          <div className="popup-container">
            <div className="text-xs flex flex-col">
              <span className="text-xl  p-2 rounded-full cursor-pointer" onClick={closePopup}>&times;</span>
               <span className='p-1 px-10 cursor-pointer border my-1' onClick={handleclick}>$59.99/year Annual</span>
               <span className='p-1 px-10  cursor-pointer border my-1' onClick={handleclick}>$29.99/month Monthly</span>
               <span className='p-1 px-10  cursor-pointer border my-1'  onClick={handleclick}>$19.99/days days</span>
            </div>
          </div>
        )}

        <button onClick={send} className='bg-blue-500 p-3 w-72 sm:w-80 font-bold rounded-lg mt-4'>{pay}</button>
        <button onClick={cancel} className='bg-transparent border-none m-4'>Cancel order</button>
      </div>
    </div>
  );
}

export default Card;
