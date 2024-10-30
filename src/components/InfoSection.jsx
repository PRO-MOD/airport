import React from 'react';

const InfoSection = () => {
  return (
    <div className="w-full mx-auto my-10 px-12">
      {/* Introductory Information */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Web-Check In</h2>
        <p className="mb-4">
          Check in for Akasa Air flights in a few quick steps from the comfort of your home, office, or wherever you are!
        </p>
        <p className="mb-4">
          Web Check-in service is available from 48 hours up to 1 hour before the departure of domestic and international flights. 
          All you need for Web Check-in is your PNR/Booking Reference and your last name as printed on your eTicket.
        </p>
        <p>
          During the check-in process, you can also select your preferred seat as well as various Add-Ons. 
          <a href="#" className="text-orange-500 hover:underline">Click here</a> for baggage limit and related guidelines.
        </p>
      </div>

      {/* Steps Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">How it works?</h2>
        <div className="space-y-6">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Step 1:</h3>
            <p>Visit Akasa Air and click on the Check-in tab on the homepage.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Step 2:</h3>
            <p>Enter your PNR/Booking Reference along with your last name.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Step 3:</h3>
            <p>Choose your preferred seat from available options.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Step 4:</h3>
            <p>Submit all the requested details and receive your e-boarding pass.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
