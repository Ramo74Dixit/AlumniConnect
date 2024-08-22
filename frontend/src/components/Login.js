import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaSchool, FaUser } from 'react-icons/fa';

const roles = {
  alumnilist: { name: 'Alumni', icon: <FaUserGraduate /> },
  colleges: { name: 'College', icon: <FaSchool /> },
  students: { name: 'Student', icon: <FaUser /> },
};

const Login = ({ notify }) => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
    role: 'alumnilist', // Default role
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/login-${formData.role}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailOrPhone: formData.emailOrPhone,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        notify('Login successful!'); // Trigger success notification
        navigate(`/${formData.role}`); // Navigate to the appropriate dashboard
      } else {
        const errorData = await response.json();
        notify(`Error: ${errorData.message}`, { type: 'error' }); // Trigger error notification
      }
    } catch (error) {
      console.error('Error:', error);
      notify('An error occurred. Please try again.', { type: 'error' }); // Trigger error notification
    }
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 border border-[#8c8c8c] rounded-lg shadow-lg">
        <h2 className="text-[#326C85] text-2xl font-bold text-center mb-6">Login</h2>
        
        {/* Role Toggle */}
        <div className="flex justify-around mb-6">
          {Object.keys(roles).map((key) => (
            <button
              key={key}
              onClick={() => handleRoleChange(key)}
              className={`flex items-center px-4 py-2 rounded-lg transition duration-300 ease-in-out ${
                formData.role === key ? 'bg-[#326C85] text-white' : 'bg-[#f0f4f8] text-[#326C85]'
              }`}
            >
              {roles[key].icon}
              <span className="ml-2">{roles[key].name}</span>
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email or Phone</label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition duration-300"
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
              className="w-full px-4 py-2 border border-[#8c8c8c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#326C85] transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#326C85] text-white py-2 px-4 rounded-lg hover:bg-[#1e5f74] focus:outline-none focus:ring-2 focus:ring-[#1e5f74] transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
