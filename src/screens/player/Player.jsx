import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './player.css';
import apiClient from '../../spotify';
import SongCard from '../../components/songCard/SongCard';
import Queue from '../../components/queue/Queue';
import AudioPlayer from '../../components/audioPlayer/AudioPlayer';

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch user playlist data
  useEffect(() => {
    if (location.state) {
      apiClient
        .get('playlists/' + location.state?.id + '/tracks')
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  // Updates the current track everytime the index changes
  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          currentTrack={currentTrack}
          isPlaying={true}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
};

export default Player;
