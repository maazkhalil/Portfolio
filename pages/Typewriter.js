import React, { useState, useEffect } from 'react';

const Typewriter = ({ words }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // Ensure words array is valid and not empty
    if (!words || !words.length) {
        return <div>No words to display</div>;
    }

    const currentWord = words[currentWordIndex];

    useEffect(() => {
        let currentIndex = 0;
        const typingSpeed = 200; // Adjust typing speed here (milliseconds)

        const timer = setInterval(() => {
            if (currentIndex <= currentWord.length) {
                setDisplayText(currentWord.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(timer); // Stop the timer when typing is complete
                setTimeout(() => {
                    // Start erasing after a delay
                    const eraseTimer = setInterval(() => {
                        if (currentIndex >= 0) {
                            setDisplayText(currentWord.substring(0, currentIndex * 2));
                            currentIndex--;
                        } else {
                            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                            clearInterval(eraseTimer); // Stop the erase timer
                        }
                    }, typingSpeed);
                }, typingSpeed * 2); // Adjust delay before erasing here
            }
        }, typingSpeed);

        return () => clearInterval(timer);
    }, [currentWord, words]);

    const maxLengthWord = Math.max(...words.map((word) => word.length)); // Find the length of the longest word
    const containerHeight = '3rem'; // Set a fixed height for the container

    return (
        <div className="text-2xl py-2 md:text-3xl" style={{ height: containerHeight, overflow: 'hidden' }}>
            <span>{displayText}</span>
        </div>
    );
};

export default Typewriter;
