import { useEffect, useState } from "react";

const words = ["DISCUSSION", "CHAT", "CONVERSATION"];

export function WordShuffle() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        const nextWord = words[Math.floor(Math.random() * words.length)];
        setCurrentWord(nextWord);
        setIsAnimating(false);
      }, 1000); // Duration of the animation
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <span className={`inline-block transition-transform duration-1000 ${isAnimating ? 'animate-roll' : ''}`}>
      {currentWord}
    </span>
  );
}