import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to manage mobile menu
  const navigate = useNavigate();  // Navigation hook for page transitions
  const location = useLocation();  // Hook to determine current path

  // Function to scroll to a section on the page
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);  // Close mobile menu after click
  };

  // Function to handle click on "Projects" button
  const handleProjectsClick = () => {
    if (location.pathname === '/') {
      handleScrollTo('projects');  // Scroll if already on the homepage
    } else {
      navigate('/');  // Navigate to homepage first
      // Slight delay to ensure page load before scrolling
      setTimeout(() => {
        const section = document.getElementById('projects');
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 200);  // 200ms delay
    }
    setIsOpen(false);  // Close the mobile menu after navigating
  };

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold">Ayush Upadhyay</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <button
                onClick={handleProjectsClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => handleScrollTo('connect')}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              {/* Mobile Hamburger Icon */}
              <svg className={`${!isOpen ? 'block' : 'hidden'} h-6 w-6`} viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Mobile Close Icon */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => {
              navigate('/about');
              setIsOpen(false);
            }}
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </button>
          <button
            onClick={handleProjectsClick}
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => handleScrollTo('connect')}
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};
