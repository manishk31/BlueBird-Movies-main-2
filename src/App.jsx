import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detail } from './components/Detail';
import Login from './auth/Login';
import Navbar from './components/Navbar'
import Container from './pages/Container'
import Trending from './pages/Trending';
import Upcoming from './pages/Upcoming';
import Favorite from './pages/Favoritepage';
import { MovieProvider } from "./Contextpage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Player from './pages/Player';
import Search from './pages/Search';
import { Helmet } from "react-helmet";
import logo from "./assets/images/logo.png"
import Anime from './components/Anime';
import { StatsigProvider } from "statsig-react";
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import { useFlags } from 'launchdarkly-react-client-sdk';
import { useGate } from 'statsig-react';

const showNothing = 'nothing';







function App() {
  
  
  const { value: showUpcoming } = useGate('show_upcoming');
  //initialize('client-EzefRU3mZWxayjjaAnomq3ynWvnzIvvzr0UH9TRS8yY', user);

  async function initializeLDProvider() {
    const LDProvider = await asyncWithLDProvider({
      clientSideID: '65f6908297a47e0faf36a84a',
      context: {
        kind: 'user',
        key: 'example-user',
        name: 'Example user',
      },
    });
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <LDProvider>
          <App />
        </LDProvider>
      </React.StrictMode>,
    );
    // Use the LDProvider here
  }

  initializeLDProvider();

  const { blueBird } = useFlags();

  return (
    
      <MovieProvider>
        <Helmet>
          <meta property="og:image" content={logo} />
        </Helmet>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />

        <Navbar />
        <div className="md:ml-[15rem]">
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/login" element={<Login />} />
            <Route path="/trending" element={<Trending />} />
            {showUpcoming ? (
              <Route path="/upcoming" element={<Upcoming />} />
            ) : null}
            <Route path="/moviedetail/:id" element={<Detail />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/player/:id/:title" element={<Player />} />{/*Route-1 For Player, Title is just for beauty of url, it is not used anywhere.*/}
            <Route path="/player/:id" element={<Player />} />{/*Route-2 For Player. Movie still available even if someone removes Title from end of the url.*/}
            <Route path="/anime" element={<Anime />} />{/**/}
            <Route path="/search/:query" element={<Container />} />
            <Route path="/search/anime/:query" element={<Container />} />
            <Route path="/search/" element={<Container />} />
          </Routes>
        </div>
        <div className="App">
            <header className="App-header">
                   <p>{blueBird ? <b>Flag on</b> : <b>Flag off</b>}</p>
             </header>
       </div>
       
      </MovieProvider>
    
  )
}
export default App;