import React, {useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
//import React, { useEffect, useState } from 'react';
import { StatsigProvider } from "statsig-react";
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk'; // Add this import statement


const generateRandomString = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const user = {
  userID: generateRandomString(),
  email: `${generateRandomString()}@gmail.com`
};

(async () => { // Wrap the code block with an async function declaration
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '65f6908297a47e0faf36a84a',
    context: {
      kind: 'user',
      key: user.email,
      name: user.userID, // Read the name from the userID
    },
  });

  
  
  /*const [user, setUser] = useState({
    userID: "a-user",
    email: "user-a@gmail.com"
  });*/

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <StatsigProvider sdkKey="client-qh8NUfk8dYt26razBYgfGyL6kPvuxe4jyaG2cTrEels"
        waitForInitialization={true}
        user={user}
        options={{
          environment: { tier: "production" },
          
        }}>
        <LDProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LDProvider>
      </StatsigProvider>
    </React.StrictMode>
  );
})();

//export default LDProvider;


