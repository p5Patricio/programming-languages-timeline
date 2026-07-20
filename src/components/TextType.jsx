import React, { useState, useEffect, useRef } from 'react';

export default function TextType({
  text,
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDuration = 2000,
  startDelay = 300,
  loop = false,
  cursorCharacter = '|',
  showCursor = true,
  className = '',
  as: Component = 'span',
  onFinished,
  ...props
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textIndex] || '';

  useEffect(() => {
    // Reset state whenever text prop changes
    setDisplayedText('');
    setIsDeleting(false);
    setTextIndex(0);
    setIsFinished(false);
  }, [text]);

  useEffect(() => {
    if (isFinished && !loop) return;

    let timeoutId;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentText.length) {
          const nextChar = currentText.slice(0, displayedText.length + 1);
          setDisplayedText(nextChar);
          timeoutId = setTimeout(handleTyping, typingSpeed + (Math.random() * 20 - 10));
        } else {
          // Finished typing current text
          if (textArray.length === 1 && !loop) {
            setIsFinished(true);
            if (onFinished) onFinished();
            return;
          }
          // Pause before deleting
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
          timeoutId = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Finished deleting current text
          setIsDeleting(false);
          const nextIndex = (textIndex + 1) % textArray.length;
          setTextIndex(nextIndex);
          if (nextIndex === 0 && !loop) {
            setIsFinished(true);
            if (onFinished) onFinished();
            return;
          }
        }
      }
    };

    timeoutId = setTimeout(handleTyping, displayedText === '' && !isDeleting ? startDelay : typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, textIndex, currentText, typingSpeed, deletingSpeed, pauseDuration, startDelay, loop, isFinished, textArray.length, onFinished]);

  return (
    <Component className={`inline-flex items-center ${className}`} {...props}>
      <span className="sr-only">{currentText}</span>
      <span aria-hidden="true">{displayedText}</span>
      {showCursor && (!isFinished || loop) && (
        <span aria-hidden="true" className="animate-pulse ml-0.5 text-indigo-500 dark:text-cyan-400 font-extrabold select-none">
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
}
