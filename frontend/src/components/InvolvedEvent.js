import React from 'react'

const InvolvedEvent = () => {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-6">
      <div className='w-[400px] h-[150px] shadow-lg border border-[#8c8c8c] rounded-lg bg-[#CEE7F2] flex flex-col items-center p-4'>
        <h4 className='text-center font-bold text-xl text-[#326C85]'>Volunteer</h4>
        <p className='text-center text-sm mt-2'>
          Join our team of dedicated volunteers and make a difference in the alumni community.
        </p>
        <div className='mt-4'>
          <button className='rounded-lg bg-[#326C85] text-white text-center px-4 py-2'>
            Sign Up
          </button>
        </div>
      </div>
  
      <div className='w-[400px] h-[150px] shadow-lg border border-[#8c8c8c] rounded-lg bg-[#CEE7F2] flex flex-col items-center p-4'>
        <h4 className='text-center font-bold text-xl text-[#326C85]'>Donate</h4>
        <p className='text-center text-sm mt-2'>
          Support our initiatives by making a donation to the alumni association.
        </p>
        <div className='mt-4'>
          <button className='rounded-lg bg-[#326C85] text-white text-center px-4 py-2'>
            Donate Now
          </button>
        </div>
      </div>
  
      <div className='w-[400px] h-[150px] shadow-lg border border-[#8c8c8c] rounded-lg bg-[#CEE7F2] flex flex-col items-center p-4'>
        <h4 className='text-center font-bold text-xl text-[#326C85]'>Mentor</h4>
        <p className='text-center text-sm mt-2'>
          Share your expertise and guide recent graduates as a mentor.
        </p>
        <div className='mt-4'>
          <button className='rounded-lg bg-[#326C85] text-white text-center px-4 py-2'>
            Become a Mentor
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default InvolvedEvent
