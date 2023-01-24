import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../library/Library';
import Feed from '../feed/Feed';
import Player from '../player/Player';
import Trending from '../trending/Trending';
import Favorites from '../favorites/Favorites';
import Sidebar from '../../components/sidebar/Sidebar';
import Login from '../auth/login';
import './home.css';
import { setClientToken } from '../../spotify';

const Home = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    // Retrieve hash value
    const hash = window.location.hash;

    // Clear value after storing in local storage
    window.location.hash = '';
    if (!token && hash) {
      // Retrieve access token
      const _token = hash.split('&')[0].split('=')[1];
      // Store access token in local storage
      window.localStorage.setItem('token', _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  // If token is not present, direct to login page. Else, direct to main Home screen/route
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
