import { useRef, useState } from "react";
import "./AudioPlayer.css";
//react-icons
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons";

// eslint-disable-next-line react/prop-types
const AudioPlayer = ({ audioSrc, image }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMute, setIsMute] = useState(false);
  const [duration, setDuration] = useState("");
  const [volume, setVolume] = useState(1);
  const audioRef = useRef();

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (isMute) {
      setIsMute(false);
    } else {
      setIsMute(true);
    }
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="custom-audio-player">
      <img src={image} className="display-image-player" />
      <audio ref={audioRef} src={audioSrc} />
      <p onClick={togglePlay}>{isPlaying ? <FaPause /> : <FaPlay />}</p>
      <div className="duration-flex">
        <p>0:00</p>
      </div>
      <input
        type="range"
        onChange={handleDuration}
        className="duration-range"
      />
      <p>-21:00</p>
      <p onClick={toggleMute}>
        {!isMute ? <FaVolumeUp /> : <FaVolumeMute />}
      </p>
      <input
        type="range"
        onChange={handleVolume}
        className="volume-range"
      />
    </div>
  );
};

export default AudioPlayer;
