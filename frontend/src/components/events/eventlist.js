import React from 'react'

const eventlist = () => {
  return (
    <div className="mt-5 flex flex-wrap justify-center">
      {/* Card 1 */}
      <div className="w-[350px] h-[375px] shadow-lg border border-[#8c8c8c] bg-[#CEE7F2] mb-8 transition-transform transform hover:scale-105 hover:shadow-xl">
        <img src="./E-1.png" alt="image1" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-5">
          <h4 className="font-semibold text-xl text-[#326C85]">Annual Networking Night</h4>
          <div className="mt-2">
            <span className="text-sm text-gray-700">
              Date: October 15, 2023<br />
              Time: 6:00 PM - 9:00 PM<br />
              Location: Downtown Conference Center
            </span>
          </div>
          <div className="mt-4">
            <button className="bg-[#326C85] text-white text-center w-full py-2 rounded-lg hover:bg-[#1e5f74] transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>
  
      {/* Card 2 */}
      <div className="w-[350px] h-[375px] shadow-lg border border-[#8c8c8c] bg-[#CEE7F2] mb-8 mx-6 transition-transform transform hover:scale-105 hover:shadow-xl">
        <img src="./E-2.png" alt="image2" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-5">
          <h4 className="font-semibold text-xl text-[#326C85]">Annual Alumni Reunion</h4>
          <div className="mt-2">
            <span className="text-sm text-gray-700">
              Date: November 20, 2023<br />
              Time: 1:00 PM - 5:00 PM<br />
              Location: University Park
            </span>
          </div>
          <div className="mt-4">
            <button className="bg-[#326C85] text-white text-center w-full py-2 rounded-lg hover:bg-[#1e5f74] transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>
  
      {/* Card 3 */}
      <div className="w-[350px] h-[375px] shadow-lg border border-[#8c8c8c] bg-[#CEE7F2] mb-8 mx-6 transition-transform transform hover:scale-105 hover:shadow-xl">
        <img src="./E-3.png" alt="image3" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-5">
          <h4 className="font-semibold text-xl text-[#326C85]">Career Development Workshop</h4>
          <div className="mt-2">
            <span className="text-sm text-gray-700">
              Date: December 5, 2023<br />
              Time: 10:00 AM - 3:00 PM<br />
              Location: Alumni Hall
            </span>
          </div>
          <div className="mt-4">
            <button className="bg-[#326C85] text-white text-center w-full py-2 rounded-lg hover:bg-[#1e5f74] transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default eventlist
