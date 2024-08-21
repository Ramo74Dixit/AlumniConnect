import React, { useEffect, useState } from "react";

const JobPortal = () => {
  const [activeSection, setActiveSection] = useState("register");
  const [jobs, setJobs] = useState([]); // State to hold fetched jobs data
  const [formData, setFormData] = useState({
    JobRole: "",
    Company: "",
    Salary: "",
    Location: "",
    JobType: "",
    Experience: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Job registered successfully!");
        setFormData({
          JobRole: "",
          Company: "",
          Salary: "",
          Location: "",
          JobType: "",
          Experience: "",
        });
        fetchJobs();
      } else {
        alert("Failed to register job.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };
  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:4000/users");
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      } else {
        console.error("Failed to fetch jobs");
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h3 className="font-bold text-3xl mt-5 ml-5 text-center underline">
        Get Ready To Get A Job
      </h3>
      <div className="border border-[#8c8c8c] w-[95%] h-[30px] ml-8 mt-3 flex">
        <div
          className="w-[50%] border border-[#8c8c8c] bg-slate-400 text-center cursor-pointer "
          onClick={() => setActiveSection("register")}
        >
          <span className="text-black font-medium no-underline text-center">
            Register a Job
          </span>
        </div>
        <div
          className="w-[50%] border border-[#8c8c8c] bg-zinc-500 text-center cursor-pointer "
          onClick={() => setActiveSection("get")}
        >
          <span className="text-black font-medium no-underline text-center">
            Get a Job
          </span>
        </div>
      </div>

      {activeSection === "register" && (
        <div className="mt-5 p-8 bg-white shadow-md border border-[#8c8c8c] rounded-lg w-[90%] ml-14">
          <p className="text-gray-600 text-lg mb-6">
            Register a new job opportunity
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="w-full md:w-1/2">
                <label className="block font-semibold text-lg text-gray-700 mb-2">
                  JobRole
                </label>
                <input
                  type="text"
                  name="JobRole"
                  value={formData.JobRole}
                  onChange={handleChange}
                  placeholder="Enter the job role"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <label className="block font-semibold text-lg text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="Company"
                  value={formData.Company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="w-full md:w-1/2">
                <label className="block font-semibold text-lg text-gray-700 mb-2">
                  Salary
                </label>
                <input
                  type="text"
                  name="Salary"
                  value={formData.Salary}
                  onChange={handleChange}
                  placeholder="Enter the salary"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <label className="block font-semibold text-lg text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="Location"
                  value={formData.Location}
                  onChange={handleChange}
                  placeholder="Enter the location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="w-full md:w-1/2">
                <label className="block font-semibold text-lg text-gray-700 mb-2">
                  Job Type
                </label>
                <select
                  name="JobType"
                  value={formData.JobType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Job Type</option>
                  <option value="Internship">Internship</option>
                  <option value="Full-Time">Full-Time</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <label className="block font-semibold text-lg text-gray-700 mb-2">
                  Experience Required
                </label>
                <input
                  type="text"
                  name="Experience"
                  value={formData.Experience}
                  onChange={handleChange}
                  placeholder="Enter required experience in years"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button className="w-full md:w-[30%] bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors block mx-auto">
              Register Job
            </button>
          </form>
        </div>
      )}

      {activeSection === "get" && (
        <div className="mt-5 p-5 border border-[#8c8c8c] w-[95%] ml-8">
          <p>Here, you can search for job opportunities...</p>
          <div className="flex justify-between space-x-4">
            <div className="w-[30%]">
              <label className="block font-semibold text-lg text-gray-700 mb-2">
                Job-Role
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Internship</option>
                <option>Full-Time</option>
              </select>
            </div>
            <div className="w-[30%]">
              <label className="block font-semibold text-lg text-gray-700 mb-2">
                Salary
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Internship</option>
                <option>Full-Time</option>
              </select>
            </div>
            <div className="w-[30%]">
              <label className="block font-semibold text-lg text-gray-700 mb-2">
                Location
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Internship</option>
                <option>Full-Time</option>
              </select>
            </div>
      </div>
          <table className="min-w-full mt-5 border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Job Role</th>
                <th className="border border-gray-300 p-2">Company</th>
                <th className="border border-gray-300 p-2">Salary</th>
                <th className="border border-gray-300 p-2">Location</th>
                <th className="border border-gray-300 p-2">Experience</th>
                <th className="border border-gray-300 p-2">Job Type</th>
                <th className="border border-gray-300 p-2">Register For Job</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 p-2">{job.JobRole}</td>
                  <td className="border border-gray-300 p-2">{job.Company}</td>
                  <td className="border border-gray-300 p-2">{job.Salary}</td>
                  <td className="border border-gray-300 p-2">{job.Location}</td>
                  <td className="border border-gray-300 p-2">{job.Experience} years</td>
                  <td className="border border-gray-300 p-2">{job.JobType}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                      Apply For Job
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobPortal;
