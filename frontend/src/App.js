import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import Landing from './landing';
import Event from './Events';
import Donate from './Donate';
import Contact from './Contact';
import Navbar from './components/Navbar';
import AlumniRegister from './components/Registeration/AlumniRegister';
import StudentRegister from './components/Registeration/StudentRegister';
import CollegeRegister from './components/Registeration/CollegeRegister';
import JobPortal from './components/job-portal/JobPortal';
import Login from './components/Login';

function App() {
  const notify = (message, type = 'success') => {
    const bgColor = type === 'success'
      ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600'
      : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600';

    toast(message, {
      position: 'top-center',
      autoClose: 3000,
      className: `${bgColor} text-white font-semibold rounded-xl p-6 shadow-2xl transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg`,
      bodyClassName: 'text-white',
      closeButton: false,
      hideProgressBar: true,
      progressClassName: 'bg-white',
      style: {
        opacity: 0.9,
        backdropFilter: 'blur(10px)',
      },
      onClose: () => console.log('Notification closed!'), // Optional callback on close
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/event" element={<Event />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register-alumni" element={<AlumniRegister />} />
        <Route path="/register-student" element={<StudentRegister />} />
        <Route path="/register-college" element={<CollegeRegister />} />
        <Route path="/job-portal" element={<JobPortal />} />
        <Route path="/login" element={<Login notify={notify} />} />
      </Routes>

      {/* Button to trigger a test notification */}
      <button 
        onClick={() => notify('Test Notification')}
        className="fixed bottom-10 right-10 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        Show Test Notification
      </button>

      <ToastContainer />
    </Router>
  );
}

export default App;
