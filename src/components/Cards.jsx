import { useState, useEffect } from 'react';
import flip from '../assets/arrow-rotate-left-solid.svg';

function Cards(props) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const blueShades = ['bg-blue-200', 'bg-blue-400', 'bg-gray-300', 'bg-gray-400'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * blueShades.length);
    return blueShades[randomIndex];
  };

  useEffect(() => {
    setBackgroundColor(getRandomColor());
  }, [props.flashcard]);

  const handleFlipCard = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
    setFeedback('');
  };

  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmitGuess = () => {
    if (userGuess.toLowerCase().trim() === props.flashcard.command.toLowerCase().trim()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. Try again!');
    }
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center justify-items-center items-center rounded-xl p-5 sm:w-2/3 m-auto lg:m-auto  text-center bg-gray-100 border-gray-800 drop-shadow-2xl ${backgroundColor}`}>
        <div className='text-2xl'>
          {showAnswer ? (
            <h3 className='pt-4 lg:pt-6 text-4xl lg:text-5xl h-48 md:h-32 lg:h-14'>
              {props.flashcard.command}
            </h3>
          ) : (
            <p className='h-48 md:h-32 lg:h-14'>{props.flashcard.explanation}</p>
          )}
        </div>
        <div className='mt-4 sm:mt-2 md:mt-20 h-24'>
          {!showAnswer && (
            <div className='mt-4 sm:mt-1'>
              <input
                type='text'
                placeholder='Enter your guess here'
                value={userGuess}
                onChange={handleGuessChange}
                className='mb-2 px-4 py-2 border rounded bg-blue-300'
              />
              <button
                onClick={handleSubmitGuess}
                className='ml-2 bg-sky-950 text-white px-4 py-2 rounded'>
                Submit
              </button>
            </div>
          )}
        </div>

        <div className='h-10 mt-2'>
          {feedback && <p className='mt-2 text-lg font-bold'>{feedback}</p>}
        </div>

        <div className='rounded-xl mt-2 sm:mt-1 md:mt-8 p-0 w-full h-12 sm:h-8 text-center'>
          <button onClick={handleFlipCard}>
            <img src={flip} className='logo w-6 md:w-8 ' alt='Flip flashcard.' />
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
