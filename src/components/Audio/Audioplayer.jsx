import React, { useState, useEffect } from 'react';
import { storage } from '../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const AudioPlayer = (props) => {
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    // Correct usage of ref function
    const audioStorageRef = ref(storage, props.url);

    getDownloadURL(audioStorageRef)
      .then((url) => {
        setAudioUrl(url);
      })
      .catch((error) => {
        console.error('Error getting download URL:', error);
      });
  }, [props.url]); // Adding props.url to the dependency array to react to changes

  return (
    <div>
      {audioUrl && <audio controls src={audioUrl} />}  
    </div>
  );
};

export default AudioPlayer;
