import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';

const VoicePreview = ({ text, voice = 'default', rate = 1, pitch = 1, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState([]);
  const [currentUtterance, setCurrentUtterance] = useState(null);

  useEffect(() => {
    // Load available voices
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    speechSynthesis.addEventListener('voiceschanged', loadVoices);

    return () => {
      speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      if (currentUtterance) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  const getVoiceByName = (voiceName) => {
    if (!voices.length) return null;
    
    // Voice mapping for different agent personalities
    const voiceMap = {
      'Sarah': voices.find(v => v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Victoria')) || voices.find(v => v.gender === 'female'),
      'John': voices.find(v => v.name.includes('Male') || v.name.includes('Daniel') || v.name.includes('Alex')) || voices.find(v => v.gender === 'male'),
      'Emma': voices.find(v => v.name.includes('Emma') || v.name.includes('Karen') || v.name.includes('Moira')) || voices.find(v => v.gender === 'female'),
      'David': voices.find(v => v.name.includes('David') || v.name.includes('Tom') || v.name.includes('Fred')) || voices.find(v => v.gender === 'male'),
      'Lisa': voices.find(v => v.name.includes('Lisa') || v.name.includes('Anna') || v.name.includes('Fiona')) || voices.find(v => v.gender === 'female'),
      'default': voices[0]
    };

    return voiceMap[voiceName] || voiceMap['default'] || voices[0];
  };

  const speak = () => {
    if (!text || !text.trim()) return;

    // Cancel any existing speech
    speechSynthesis.cancel();

    // Clean the text for better speech synthesis
    const cleanText = text
      .replace(/\[.*?\]/g, '') // Remove stage directions like [WAIT FOR RESPONSE]
      .replace(/\*.*?\*/g, '') // Remove italic text
      .replace(/\n\n/g, '. ') // Replace double newlines with periods
      .replace(/\n/g, ' ') // Replace single newlines with spaces
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    // Set voice
    const selectedVoice = getVoiceByName(voice);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    
    // Set speech parameters
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = 1;

    // Event handlers
    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentUtterance(null);
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error);
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentUtterance(null);
    };

    utterance.onpause = () => {
      setIsPaused(true);
    };

    utterance.onresume = () => {
      setIsPaused(false);
    };

    setCurrentUtterance(utterance);
    speechSynthesis.speak(utterance);
  };

  const pause = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
    }
  };

  const resume = () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
    }
  };

  const stop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentUtterance(null);
  };

  const handleClick = () => {
    if (!isPlaying) {
      speak();
    } else if (isPaused) {
      resume();
    } else {
      pause();
    }
  };

  // Check if speech synthesis is supported
  const isSpeechSupported = typeof speechSynthesis !== 'undefined';

  if (!isSpeechSupported) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="p-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed">
          <VolumeX className="w-4 h-4" />
        </div>
        <span className="text-sm text-gray-500">Speech not supported</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={handleClick}
        disabled={!text || !text.trim()}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isPlaying
            ? 'bg-red-100 text-red-700 hover:bg-red-200'
            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isPlaying ? (
          isPaused ? (
            <Play className="w-4 h-4" />
          ) : (
            <Pause className="w-4 h-4" />
          )
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
        <span>
          {isPlaying ? (isPaused ? 'Resume' : 'Pause') : 'Listen'}
        </span>
      </button>

      {isPlaying && (
        <button
          onClick={stop}
          className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
          title="Stop"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      )}

      <div className="text-sm text-gray-500">
        Voice: {voice}
      </div>
    </div>
  );
};

export default VoicePreview;