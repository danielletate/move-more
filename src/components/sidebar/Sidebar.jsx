import React, { useEffect, useState } from 'react';
import './sidebar.css';
import Avatar from '../../assets/avatar.png';
import SidebarButton from './SidebarButton';
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md';
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import apiClient from '../../spotify';

const Sidebar = () => {
  const [image, setImage] = useState(Avatar);

  // Retrieves current users data
  useEffect(() => {
    apiClient.get('me').then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} alt="profile" className="profile-img" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
