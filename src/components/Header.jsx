import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="https://assets.akasaair.com/f/159922/179x46/5114cb7302/akasa-home-logo.svg" 
            alt="Akasa Air Logo" 
            className="w-36 h-auto"
          />
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="https://pro-mod.github.io/challenge1/" className="text-gray-600 hover:text-orange-500 font-medium">Boarding System</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Manage Booking</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Check-in</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Add-Ons</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Offers</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Contact Us</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Login</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button aria-label="Open Menu" className="text-gray-600 hover:text-orange-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
