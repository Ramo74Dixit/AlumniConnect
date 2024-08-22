import React from 'react'

const LandingSuccessEvent = () => {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-6">
      <div className='w-[44%] h-[500px] shadow-lg border border-[#8c8c8c] rounded-lg bg-[#f5f5f5] transition-transform transform hover:scale-105 ml-5'>
        <img src="./pr-1.jpg" alt="Jane Smith" className="w-full h-[60%] object-cover rounded-t-lg" />
        <div className="p-4">
          <h4 className="font-semibold text-xl text-[#326C85]">Jane Smith - Entrepreneur</h4>
          <p className="text-sm text-gray-700 mt-2">
            Jane Smith, Class of 2010, has built a successful tech startup that is revolutionizing the industry.
          </p>
        </div>
      </div>
  
      <div className='w-[44%] h-[500px] shadow-lg border border-[#8c8c8c] rounded-lg bg-[#f5f5f5] transition-transform transform hover:scale-105 ml-12'>
        <img src="./pr-2.jpg" alt="John Doe" className="w-full h-[60%] object-cover rounded-t-lg" />
        <div className="p-4">
          <h4 className="font-semibold text-xl text-[#326C85]">John Doe - Philanthropist</h4>
          <p className="text-sm text-gray-700 mt-2">
            John Doe, Class of 2005, has made significant contributions to various charitable organizations.
          </p>
        </div>
      </div>
    </div>
  );
  
}

export default LandingSuccessEvent
