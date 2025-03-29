import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";

function Qr() {
  const [productId, setProductId] = useState("");
  const [qrValue, setQrValue] = useState("");
  
  // Generate the URL for the QR code
  const generateQRUrl = (id) => {
    // This creates a URL with the product ID as a parameter
    return `${window.location.origin}/review/${id}`;
  };
  
  const handleGenerate = () => {
    if (productId) {
      setQrValue(generateQRUrl(productId));
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Generate QR Code</h2>
      
      <div className="w-full flex flex-col space-y-4">
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Enter Product ID"
          className="border p-2 rounded w-full"
        />
        
        <button 
          onClick={handleGenerate}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Generate QR Code
        </button>
      </div>
      
      {qrValue && (
        <div className="mt-6 flex flex-col items-center">
          <QRCode value={qrValue} size={200} />
          <p className="mt-2 text-sm text-gray-600">Scan to provide feedback for Product ID: {productId}</p>
          <a 
            href={qrValue} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 text-blue-600 hover:underline"
          >
            Test Review Link
          </a>
        </div>
      )}
    </div>
  );
}

export default Qr;
