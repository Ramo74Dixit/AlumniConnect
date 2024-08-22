import React from "react";

const LandingEvent = () => {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-6">
      <div className="w-[400px] h-[500px] shadow-lg border border-[#8c8c8c] rounded-lg bg-[#f5f5f5] transition-transform transform hover:scale-105">
        <img src="./AnualAlumnuMeetup.png" alt="Annual Alumni Meetup" className="w-full h-2/3 object-cover rounded-t-lg" />
        <div className="p-4">
          <h4 className="font-semibold text-xl text-[#326C85]">Annual Alumni Meetup</h4>
          <p className="text-sm text-gray-700 mt-2">
            Join us for a day of networking and reminiscing with fellow alumni.
            <br />
            <span className="font-medium">Date:</span> March 25, 2025
          </p>
        </div>
      </div>
  
      <div className="w-[400px] h-[500px] shadow-lg border border-[#8c8c8c] rounded-lg bg-[#f5f5f5] transition-transform transform hover:scale-105">
        <img src="./CommunityServiceDay.png" alt="Career Development Workshop" className="w-full h-2/3 object-cover rounded-t-lg" />
        <div className="p-4">
          <h4 className="font-semibold text-xl text-[#326C85]">Career Development Workshop</h4>
          <p className="text-sm text-gray-700 mt-2">
            Enhance your professional skills with our expert-led workshop.
            <br />
            <span className="font-medium">Date:</span> April 10, 2025
          </p>
        </div>
      </div>
  
      <div className="w-[400px] h-[500px] shadow-lg border border-[#8c8c8c] rounded-lg bg-[#f5f5f5] transition-transform transform hover:scale-105">
        <img src="./CarrerDevelopmentWorkshop.png" alt="Community Service Day" className="w-full h-2/3 object-cover rounded-t-lg" />
        <div className="p-4">
          <h4 className="font-semibold text-xl text-[#326C85]">Community Service Day</h4>
          <p className="text-sm text-gray-700 mt-2">
            Give back to the community by participating in our service day.
            <br />
            <span className="font-medium">Date:</span> May 5, 2025
          </p>
        </div>
      </div>
    </div>
  );
  
  
};

export default LandingEvent;
