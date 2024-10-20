import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const trackAddress = () => {
    axios.post('/api/track', { address, email })
      .then(response => alert(response.data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>BaseAlert</h1>
      <input 
        type="text" 
        placeholder="Enter wallet or contract address" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={trackAddress}>Track Address</button>
    </div>
  );
}

export default App;
