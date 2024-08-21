import React, { useState } from 'react';

const AlumniRegister = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    branch: "",
    collegeName: "",
    degree: "",
    batch: "",
    currentCompany: "",
    position: "",
    termsAccepted: false,
  });

  const degreesList = [
    "BTECH", "BSC", "BA", "MBA", "BCA", "MCA", "MTECH", "BBA", "PHD", "BPHARMA", "DPHARMA", "MBBS"
  ];

  const batchList = Array.from({ length: 25 }, (_, i) => 2000 + i);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("You must accept the Terms & Conditions");
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/register-alumni', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Alumni registered successfully!");
        // Optionally, clear the form
        setFormData({
          studentName: "",
          branch: "",
          collegeName: "",
          degree: "",
          batch: "",
          currentCompany: "",
          position: "",
          termsAccepted: false,
        });
      } else {
        alert("Error registering alumni. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full bg-white p-10 border border-gray-300 rounded-lg shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-center font-mono font-bold text-3xl mb-8 text-gray-800">
          Alumni Register
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
            <label className="block text-gray-700 font-semibold mb-2">Branch</label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-green-300 focus:border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out"
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
            <label className="block text-gray-700 font-semibold mb-2">Degree</label>
            <select
              name="degree"
              value={formData.degree}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-pink-300 focus:border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out"
              required
            >
              <option value="">Select Degree</option>
              {degreesList.map((degree, index) => (
                <option key={index} value={degree}>
                  {degree}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Batch</label>
            <select
              name="batch"
              value={formData.batch}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-yellow-300 focus:border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 ease-in-out"
              required
            >
              <option value="">Select Batch</option>
              {batchList.map((batch, index) => (
                <option key={index} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Current Company</label>
            <input
              type="text"
              name="currentCompany"
              value={formData.currentCompany}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-indigo-300 focus:border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-red-300 focus:border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-pink-600 border-pink-300 focus:ring-pink-400 transition duration-300 ease-in-out"
              required
            />
            <span className="ml-2 text-gray-700">
              I have read and accept the{" "}
              <a href="/terms" target="_blank" className="text-blue-500 hover:underline">
                Terms & Conditions
              </a>
            </span>
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

export default AlumniRegister;
