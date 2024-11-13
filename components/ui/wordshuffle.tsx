import { useEffect, useState } from "react";

const words = ["DISCUSSION", "CHAT", "CONVERSATION"];

export function WordShuffle() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalWords = words.length;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        // Update the current word based on the counter
        setCurrentWord(words[counter]);
        setIsAnimating(false);

        // Update the counter for the next word
        setCounter((prevCounter) => (prevCounter + 1) % totalWords);
      }, 1000); // Matches the duration of the CSS animation
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [counter, totalWords]);

  return (
    <span className={`${isAnimating ? 'animate-roll' : 'rollIn'}`}>
      {currentWord}
    </span>
  );
}
