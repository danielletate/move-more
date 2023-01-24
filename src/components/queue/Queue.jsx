import React from 'react';
import './queue.css';

const Queue = ({ tracks, setCurrentIndex }) => {
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <div className="upNext">Up Next</div>
        <div className="queue-list">
          {tracks &&
            tracks?.map((track, index) => (
              <div
                className="queue-item flex"
                key={index + 'key'}
                onClick={() => setCurrentIndex(index)}
              >
                <p className="track-name">{track?.track?.name}</p>
                <p>0:30</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
