import { useState } from 'react';
import flip from '../assets/arrow-rotate-left-solid.svg';

function Cards(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFlipCard = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  return (
    <>
      <div className='flex flex-col justify-center justify-items-center items-center rounded-xl p-5 max-w-full lg:mx-40 text-center bg-gray-100 border-gray-800 drop-shadow-2xl'>
        <div className='text-xl'>
          {showAnswer ? (
            <p className='h-48 md:h-32 lg:h-14'>{props.flashcard.explanation}</p>
          ) : (
            <h3 className='h-48 md:h-32 lg:h-14'>{props.flashcard.command}</h3>
          )}
        </div>

        <div className='rounded-xl mt-4 md:mt-20 p-0 w-full h-12 text-center'>
          <button onClick={handleFlipCard}>
            <img src={flip} className='logo w-8 md:w-10 lg:w-12' alt='Flip flashcard.' />
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
