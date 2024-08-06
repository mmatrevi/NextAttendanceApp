import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter from next/router

const Home = () => {
  const [qrCodeData, setQrCodeData] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [isValid, setIsValid] = useState(null);
  const router = useRouter(); // Initialize the useRouter hook

  const fetchQRCode = async () => {
    try {
      const response = await axios.get('/api/qr/generate-qr');
      setQrCodeData(response.data.qrCodeData);
      setSessionId(response.data.sessionId);
    } catch (error) {
      console.error('Error fetching QR code:', error);
    }
  };

  const handleCodeSubmit = async () => {
    try {
      console.log('Submitting Code:', enteredCode);
      console.log('Session ID:', sessionId);
      const response = await axios.post('/api/qr/validate-code', {
        enteredCode,
        sessionId,
      });
      console.log('Validation Response:', response.data);
      setIsValid(response.data.valid);
      if (response.data.valid) {
        console.log("Redirecting to /main");
        router.push('/Main'); // Ensure this path is correct
      } else {
        alert('Invalid code');
      }
    } catch (error) {
      console.error('Error validating code:', error);
    }
  };



  return (
    <div>
      <h1>Scan QR Code</h1>
      <button onClick={fetchQRCode}>Generate QR Code</button>
      {qrCodeData && <img src={qrCodeData} alt="QR Code" />}
      <div>
        <input
          type="text"
          placeholder="Enter Code"
          value={enteredCode}
          onChange={(e) => setEnteredCode(e.target.value)}
        />
        <button onClick={handleCodeSubmit}>Submit</button>
      </div>
      {isValid === false && <p>Invalid code, please try again.</p>}
    </div>
  );
};

export default Home;
