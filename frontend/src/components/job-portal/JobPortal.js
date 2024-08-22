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
    <div className="p-4 md:p-8 bg-[#f5f5f5] min-h-screen">
      <h3 className="font-bold text-2xl md:text-3xl text-center text-[#326C85] mt-5 mb-3 underline">
        Get Ready To Get A Job
      </h3>
  
      <div className="border border-[#8c8c8c] w-full md:w-4/5 mx-auto h-[40px] flex mt-3 mb-5 rounded-lg overflow-hidden">
        <div
          className={`w-1/2 border border-[#8c8c8c] text-center cursor-pointer transition-transform duration-300 ${activeSection === "register" ? "bg-[#326C85] text-white transform scale-105" : "bg-[#e0f2f1] text-[#326C85]"}`}
          onClick={() => setActiveSection("register")}
        >
          <span className={`font-medium ${activeSection === "register" ? "underline" : ""}`}>Register a Job</span>
        </div>
        <div
          className={`w-1/2 border border-[#8c8c8c] text-center cursor-pointer transition-transform duration-300 ${activeSection === "get" ? "bg-[#326C85] text-white transform scale-105" : "bg-[#e0f2f1] text-[#326C85]"}`}
          onClick={() => setActiveSection("get")}
        >
          <span className={`font-medium ${activeSection === "get" ? "underline" : ""}`}>Get a Job</span>
        </div>
      </div>
  
      {activeSection === "register" && (
        <div className="mt-5 p-6 bg-white shadow-lg border border-[#8c8c8c] rounded-lg w-full md:w-4/5 mx-auto">
          <p className="text-[#326C85] text-lg mb-6">Register a new job opportunity</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="w-full md:w-1/2">
                <label className="block font-semibold text-lg text-[#326C85] mb-2">Job Role</label>
                <input
                  type="text"
                  name="JobRole"
                  value={formData.JobRole}
                  onChange={handleChange}
                  placeholder="Enter the job role"
                  className="w-full px-4 py-3 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition-shadow duration-300 hover:shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <label className="block font-semibold text-lg text-[#326C85] mb-2">Company</label>
                <input
                  type="text"
                  name="Company"
                  value={formData.Company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition-shadow duration-300 hover:shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="w-full md:w-1/2">
                <label className="block font-semibold text-lg text-[#326C85] mb-2">Salary</label>
                <input
                  type="text"
                  name="Salary"
                  value={formData.Salary}
                  onChange={handleChange}
                  placeholder="Enter the salary"
                  className="w-full px-4 py-3 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition-shadow duration-300 hover:shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <label className="block font-semibold text-lg text-[#326C85] mb-2">Location</label>
                <input
                  type="text"
                  name="Location"
                  value={formData.Location}
                  onChange={handleChange}
                  placeholder="Enter the location"
                  className="w-full px-4 py-3 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition-shadow duration-300 hover:shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="w-full md:w-1/2">
                <label className="block font-semibold text-lg text-[#326C85] mb-2">Job Type</label>
                <select
                  name="JobType"
                  value={formData.JobType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition-shadow duration-300 hover:shadow-lg"
                >
                  <option value="">Select Job Type</option>
                  <option value="Internship">Internship</option>
                  <option value="Full-Time">Full-Time</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <label className="block font-semibold text-lg text-[#326C85] mb-2">Experience Required</label>
                <input
                  type="text"
                  name="Experience"
                  value={formData.Experience}
                  onChange={handleChange}
                  placeholder="Enter required experience in years"
                  className="w-full px-4 py-3 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition-shadow duration-300 hover:shadow-lg"
                />
              </div>
            </div>
            <button className="w-full md:w-1/3 bg-[#326C85] text-white font-semibold py-3 rounded-lg hover:bg-[#1e5f74] transition-colors duration-300 block mx-auto">
              Register Job
            </button>
          </form>
        </div>
      )}
  
      {activeSection === "get" && (
        <div className="mt-5 p-5 border border-[#8c8c8c] w-full md:w-4/5 mx-auto bg-white shadow-lg rounded-lg">
          <p className="mb-5 text-[#326C85]">Here, you can search for job opportunities...</p>
          <div className="flex flex-col md:flex-row md:justify-between mb-5">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <label className="block font-semibold text-lg text-[#326C85] mb-2">Job Role</label>
              <select className="w-full px-4 py-3 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition-shadow duration-300 hover:shadow-lg">
                <option>Internship</option>
                <option>Full-Time</option>
              </select>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <label className="block font-semibold text-lg text-[#326C85] mb-2">Salary</label>
              <select className="w-full px-4 py-3 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition-shadow duration-300 hover:shadow-lg">
                <option>Below 20,000</option>
                <option>20,000 - 50,000</option>
                <option>50,000 - 1,00,000</option>
                <option>Above 1,00,000</option>
              </select>
            </div>
            <div className="w-full md:w-1/3">
              <label className="block font-semibold text-lg text-[#326C85] mb-2">Location</label>
              <select className="w-full px-4 py-3 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition-shadow duration-300 hover:shadow-lg">
                <option>Remote</option>
                <option>New York</option>
                <option>San Francisco</option>
                <option>Chicago</option>
              </select>
            </div>
          </div>
          <table className="min-w-full mt-5 border-collapse">
            <thead>
              <tr>
                <th className="border border-[#8c8c8c] p-2 text-left text-[#326C85]">Job Role</th>
                <th className="border border-[#8c8c8c] p-2 text-left text-[#326C85]">Company</th>
                <th className="border border-[#8c8c8c] p-2 text-left text-[#326C85]">Salary</th>
                <th className="border border-[#8c8c8c] p-2 text-left text-[#326C85]">Location</th>
                <th className="border border-[#8c8c8c] p-2 text-left text-[#326C85]">Experience</th>
                <th className="border border-[#8c8c8c] p-2 text-left text-[#326C85]">Job Type</th>
                <th className="border border-[#8c8c8c] p-2 text-center text-[#326C85]">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100 hover:bg-gray-50 transition-colors duration-300">
                  <td className="border border-[#8c8c8c] p-2">{job.JobRole}</td>
                  <td className="border border-[#8c8c8c] p-2">{job.Company}</td>
                  <td className="border border-[#8c8c8c] p-2">{job.Salary}</td>
                  <td className="border border-[#8c8c8c] p-2">{job.Location}</td>
                  <td className="border border-[#8c8c8c] p-2">{job.Experience} years</td>
                  <td className="border border-[#8c8c8c] p-2">{job.JobType}</td>
                  <td className="border border-[#8c8c8c] p-2 text-center">
                    <button className="bg-[#326C85] text-white px-4 py-2 rounded hover:bg-[#1e5f74] transition-colors duration-300">
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
