import React, { useState, useEffect } from 'react';
import { storage } from '../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const AudioPlayer = () => {
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    const audioStorageRef = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/audioplayer-33956.appspot.com/o/2%20Jan%2C%20Sukhan%2C%20I1.m4a?alt=media&token=23f5f237-3938-48f9-a893-ff48790ae652');

    getDownloadURL(audioStorageRef)
      .then((url) => {
        setAudioUrl(url);
      })
      .catch((error) => {
        console.error('Error getting download URL:', error);
      });
  }, []);

  return (
    <div>
      {audioUrl && <audio controls src={audioUrl} />}
    </div>
  );
};

export default AudioPlayer;
