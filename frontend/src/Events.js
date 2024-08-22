import React from 'react'
import EventList from './components/events/eventlist'
import { Link } from 'react-router-dom';
const Events = () => {
  return (
    <div className="p-5">
      <h3 className="font-bold text-3xl text-[#326C85] ml-5 mt-4">Upcoming Alumni Events</h3>
      <EventList />
  
      <div className="mt-10 flex flex-wrap justify-between">
        <div className="ml-6 mt-2 mb-4">
          <Link to="/">
            <button className="bg-[#326C85] text-white text-center w-40 h-8 rounded-lg hover:bg-[#1e5f74] transition-colors">
              Back to HomePage
            </button>
          </Link>
        </div>
  
        <div className="mr-6 mt-2 mb-4">
          <button className="bg-[#326C85] text-white text-center w-40 h-8 rounded-lg hover:bg-[#1e5f74] transition-colors">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default Events
