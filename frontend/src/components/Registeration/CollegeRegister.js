import React, { useState } from 'react';

const CollegeRegister = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    emailOrPhone: "", // Single field for either email or phone number
    password: "",
    collegeDirector: "",
    collegeEstablishedYear: "",
    coursesAvailable: [],
    totalAlumni: "",
  });

  const [collegeNames, setCollegeNames] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const coursesList = [
    "BTECH", "BSC", "BA", "MBA", "BCA", "MCA", "MTECH", "BBA", "PHD", "BPHARMA", "DPHARMA", "MBBS"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Handle college name suggestions
    if (name === "collegeName") {
      if (value) {
        const filteredSuggestions = collegeNames.filter((college) =>
          college.toLowerCase().startsWith(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      const newCourses = checked
        ? [...prevFormData.coursesAvailable, value]
        : prevFormData.coursesAvailable.filter((course) => course !== value);
      return { ...prevFormData, coursesAvailable: newCourses };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add new college name to suggestions list if it doesn't already exist
    if (!collegeNames.includes(formData.collegeName)) {
      setCollegeNames([...collegeNames, formData.collegeName]);
    }

    try {
      const response = await fetch('http://localhost:4000/register-college', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('College registered successfully!');
        setFormData({
          collegeName: "",
          emailOrPhone: "", // Reset emailOrPhone field
          password: "", // Reset password field
          collegeDirector: "",
          collegeEstablishedYear: "",
          coursesAvailable: [],  // Reset coursesAvailable array
          totalAlumni: "",
        });
        setSuggestions([]); // Clear suggestions after successful registration
      } else {
        alert('Failed to register college');
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
          Register As College
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">College Name</label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-blue-300 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
              required
            />
            {suggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setFormData({ ...formData, collegeName: suggestion });
                      setSuggestions([]);
                    }}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email or Phone</label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-green-300 focus:border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out"
              placeholder="Enter email or phone number"
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
              className="w-full px-4 py-2 border border-purple-300 focus:border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">College Director</label>
            <input
              type="text"
              name="collegeDirector"
              value={formData.collegeDirector}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-green-300 focus:border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">College Established Year</label>
            <input
              type="number"
              name="collegeEstablishedYear"
              value={formData.collegeEstablishedYear}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-purple-300 focus:border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Courses Available in College</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {coursesList.map((course, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={course}
                    onChange={handleCheckboxChange}
                    checked={formData.coursesAvailable.includes(course)}
                    className="form-checkbox h-5 w-5 text-pink-600 border-pink-300 focus:ring-pink-400 transition duration-300 ease-in-out"
                  />
                  <span className="ml-2 text-gray-700">{course}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Total Number of Alumni Till Date</label>
            <input
              type="number"
              name="totalAlumni"
              value={formData.totalAlumni}
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

export default CollegeRegister;
