// import React, { useState } from 'react';

// const Form = () => {
//   const [pnr, setPnr] = useState('');
//   const [email, setEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const correctPnr = '7385050981';
//   const correctEmailOrLastName = 'sharma';

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (pnr === correctPnr && email.toLowerCase() === correctEmailOrLastName.toLowerCase()) {
//       downloadQRCode(); // Download the QR code if input is correct
//     } else {
//       setErrorMessage('Invalid PNR or Email/Last Name. Please try again.');
//     }
//   };

//   const downloadQRCode = () => {
//     const downloadLink = document.createElement('a');
//     downloadLink.href = 'http://localhost:5173' + '/qr-code .png'; // Assuming the QR code image is named 'qr-code.png' in the public folder
//     downloadLink.download = 'qr-code.png';
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   return (
//     <div className="w-full bg-white py-10 text-left">
//       <div className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg"
//         style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px' }}>
        
//         {/* Information Text */}
//         <p className="text-center text-gray-700 mb-6 text-base font-large">
//           Online check-in is available from 48 hours up to 1 hour before flight departure.
//         </p>

//         {/* Error Message */}
//         {errorMessage && (
//           <div className="text-red-500 text-center mb-4">
//             {errorMessage}
//           </div>
//         )}

//         {/* Form Section */}
//         <form onSubmit={handleFormSubmit}>
//           <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            
//             {/* PNR/Booking Reference Input */}
//             <div className="flex-grow relative">
//               <input 
//                 type="text" 
//                 id="pnr" 
//                 className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-500" 
//                 placeholder="Enter your PNR" 
//                 value={pnr}
//                 onChange={(e) => setPnr(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Email/Last Name Input */}
//             <div className="flex-grow relative">
//               <input 
//                 type="text" 
//                 id="email" 
//                 className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-500" 
//                 placeholder="Enter your email or last name" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="w-full md:w-auto">
//               <button 
//                 type="submit" 
//                 className="w-full bg-orange-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-orange-600 hover:brightness-90 transition-opacity"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;


import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const Form = () => {
  const [pnr, setPnr] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const correctPnr = '7385050981';
  const correctEmailOrLastName = 'sharma';

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (pnr === correctPnr && email.toLowerCase() === correctEmailOrLastName.toLowerCase()) {
      setErrorMessage('');
      setShowQRCode(true);
      const qrData = correctPnr + '_' + correctEmailOrLastName;
      setQrCodeUrl(qrData); // Set the QR data for generation
    } else {
      setErrorMessage('Invalid PNR or Email/Last Name. Please try again.');
      setShowQRCode(false);
    }
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrCodeCanvas');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qr-code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="w-full bg-white py-10 text-left">
      <div className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px' }}>
        
        {/* Information Text */}
        <p className="text-center text-gray-700 mb-6 text-base font-large">
          Online check-in is available from 48 hours up to 1 hour before flight departure.
        </p>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">
            {errorMessage}
          </div>
        )}

        {/* Form Section */}
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            
            {/* PNR/Booking Reference Input */}
            <div className="flex-grow relative">
              <input 
                type="text" 
                id="pnr" 
                className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-500" 
                placeholder="Enter your PNR" 
                value={pnr}
                onChange={(e) => setPnr(e.target.value)}
                required
              />
            </div>

            {/* Email/Last Name Input */}
            <div className="flex-grow relative">
              <input 
                type="text" 
                id="email" 
                className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-500" 
                placeholder="Enter your email or last name" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="w-full md:w-auto">
              <button 
                type="submit" 
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-orange-600 hover:brightness-90 transition-opacity"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* QR Code Display & Download Section */}
        {showQRCode && (
          <div className="mt-8 text-center">
            <QRCodeCanvas id="qrCodeCanvas" value={qrCodeUrl} size={150} includeMargin={true} />
            <button
              onClick={downloadQRCode}
              className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
