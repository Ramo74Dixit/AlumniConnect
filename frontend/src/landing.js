import React from 'react'
import LandingEvent from './components/LandingEvent'
import LandingSuccessEvent from './components/LandingSuccessEvent'
import InvolvedEvent from './components/InvolvedEvent'
const landing = () => {
  return (
    <div className="p-6 bg-[#f5f5f5]">
      <h1 className="text-2xl md:text-3xl text-[#326C85] font-bold mt-3 mb-4 text-center md:text-left">
        Connecting Alumni, Inspiring Success
      </h1>
      <span className="text-base md:text-lg text-gray-700 block text-center md:text-left mb-6">
        Our mission is to foster a strong network of alumni who are engaged, connected, and inspired to make a difference.
      </span>
  
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl text-[#326C85] font-semibold mt-6 mb-4">
          Upcoming Events
        </h3>
        <LandingEvent />
      </div>
  
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl text-[#326C85] font-semibold mt-6 mb-4">
          Success Stories
        </h3>
        <LandingSuccessEvent />
      </div>
  
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl text-[#326C85] font-semibold mt-6 mb-4">
          Get Involved
        </h3>
        <InvolvedEvent />
      </div>
  
      <div className="mt-10 flex flex-col md:flex-row md:justify-between bg-white p-6 rounded-lg shadow-md border border-[#8c8c8c]">
        <div className="mb-6 md:mb-0">
          <h5 className="text-xl md:text-2xl text-[#326C85] font-semibold mb-3">
            AlumniConnect
          </h5>
          <h6 className="text-base md:text-lg text-gray-700 mb-2">
            Kulgaon Road, Rooma Kanpur
          </h6>
          <h6 className="text-base md:text-lg text-gray-700 underline mb-2">
            Email: allumniconnect@gmail.com
          </h6>
          <h6 className="text-base md:text-lg text-gray-700">
            Phone: +91 7510029715
          </h6>
        </div>
  
        <div className="flex flex-col md:flex-row md:ml-auto text-center md:text-right">
          <a
            href="#"
            className="text-base md:text-lg text-[#326C85] hover:text-[#1e5f74] transition-colors duration-300 mb-2 md:mb-0 md:mr-5"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-base md:text-lg text-[#326C85] hover:text-[#1e5f74] transition-colors duration-300 mb-2 md:mb-0 md:mr-5"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-base md:text-lg text-[#326C85] hover:text-[#1e5f74] transition-colors duration-300"
          >
            Terms and Service
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default landing
