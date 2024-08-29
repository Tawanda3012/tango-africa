import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

const PaymentSuccessPage = () => {
//   const [isValid, setIsValid] = useState(false);
//   const { token } = useParams();

//   useEffect(() => {
//     // Replace this with your actual token verification logic
//     const verifyToken = async () => {
//       try {
//         const response = await fetch(`/api/verify-payment?token=${token}`);
//         const data = await response.json();
//         setIsValid(data.isValid);
//       } catch (error) {
//         console.error('Error verifying token:', error);
//         setIsValid(false);
//       }
//     };

//     verifyToken();
//   }, [token]);

//   if (!isValid) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <XCircle className="w-24 h-24 mb-6 text-red-500" />
//         <h1 className="text-2xl font-semibold text-center text-gray-800">
//           Invalid or Expired Link
//         </h1>
//       </div>
//     );
//   }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <CheckCircle className="w-24 h-24 mb-6 text-green-500" />
      <h1 className="mb-2 text-2xl font-semibold text-center text-gray-800">
        Payment Success!
      </h1>
      <p className="text-center text-gray-600">
        You can close this window to go back to the app.
      </p>
    </div>
  );
};

export default PaymentSuccessPage;