import React, { useState } from 'react';

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    emailOrPhone: "",
    collegeName: "",
    course: "",
    yearOfStudy: "",
    password: "", // Added password field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/register-student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Student registered successfully!');
        setFormData({
          studentName: "",
          emailOrPhone: "",
          collegeName: "",
          course: "",
          yearOfStudy: "",
          password: "", // Reset password field
        });
      } else {
        alert('Failed to register student');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[80%] mt-5 bg-white p-10 border border-gray-300 rounded-lg shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-center font-mono font-bold text-3xl mb-8 text-gray-800">
          Register As Student
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-blue-300 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email or Phone</label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-green-300 focus:border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-red-300 focus:border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">College Name</label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-purple-300 focus:border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-pink-300 focus:border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Year of Study</label>
            <input
              type="text"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-yellow-300 focus:border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
