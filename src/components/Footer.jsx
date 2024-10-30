import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-2">Flying with Akasa</h4>
            <ul>
              <li><a href="#" className="hover:underline">Our Network</a></li>
              <li><a href="#" className="hover:underline">Flight Schedule</a></li>
              <li><a href="#" className="hover:underline">Customer Experience</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Know Akasa</h4>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Our Fleet</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:underline">Baggage</a></li>
              <li><a href="#" className="hover:underline">Cargo</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Media Center</h4>
            <ul>
              <li><a href="#" className="hover:underline">Press Releases</a></li>
              <li><a href="#" className="hover:underline">Company Statements</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-6">&copy; 2024 Akasa Air. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
