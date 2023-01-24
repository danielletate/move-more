import React, { useEffect, useRef, useState } from 'react';
import './audioPlayer.css';
import ProgressCircle from './ProgressCircle';
import WaveAnimation from './WaveAnimation';
import Controls from './Controls';

const AudioPlayer = ({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  // // Progress of current track being played
  // const [trackProgress, setTrackProgress] = useState(0);

  // // Retrieves the url of the song being played
  // let audioSrc = total[currentIndex]?.track.preview_url;

  // // Used to play and stop music/audio
  // const audioRef = useRef(new Audio(total[0]?.track.preview_url));

  // const intervalRef = useRef();

  // const isReady = useRef(false);

  // const { duration } = audioRef.current;

  // // Calculates percentage of song completed
  // const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  // // Starts time when audio starts playing
  // const startTimer = () => {
  //   clearInterval(intervalRef.current);

  //   // If audioRef has ended, player will go to next song. If it has not ended, progress of the song will be displayed.
  //   intervalRef.current = setInterval(() => {
  //     if (audioRef.current.ended) {
  //       handleNext();
  //     } else {
  //       setTrackProgress(audioRef.current.currentTime);
  //     }
  //   }, [1000]);
  // };

  // // If the "play" button is pushed and a song is playing, audioRef is created and set to a new instance with a new url.
  // // Plays song
  // useEffect(() => {
  //   if (isPlaying && audioRef.current) {
  //     audioRef.current = new Audio(audioSrc);
  //     audioRef.current.play();
  //     startTimer();
  //   } else {
  //     // Pauses if no song is playing
  //     clearInterval(intervalRef.current);
  //     audioRef.current.pause();
  //   }
  // }, [isPlaying]);

  // // Whenever the current song index changes, previous song is paused and new song is added to the audioRef and played
  // useEffect(() => {
  //   audioRef.current.pause();
  //   audioRef.current = new Audio(audioSrc);

  //   setTrackProgress(audioRef.current.currentTime);

  //   // Checks if song is ready to be played
  //   if (isReady.current) {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //     startTimer();
  //   } else {
  //     isReady.current = true;
  //   }
  // }, [currentIndex]);

  // // Clean-up function
  // useEffect(() => {
  //   return () => {
  //     audioRef.current.current.pause();
  //     clearInterval(intervalRef.current);
  //   };
  // }, []);

  // Go to next song
  // On last song, set index to 0.
  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Go to last played song in index
  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const artists = [];
  // Iterates over each artist and stores values in artists object
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });
  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          percentage={75}
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#C96850"
        />
      </div>
      <div className="player-right-body flex">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist">{artists.join(' | ')}</p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:01</p>
            <WaveAnimation isPlaying={true} />
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
