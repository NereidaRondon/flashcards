import './App.css';
import { useState } from 'react';
import cards from './assets/flashcards.svg';
import data from './components/data';
import Cards from './components/Cards';

function App() {
  const flashcardsArray = Object.entries(data).map(([key, value]) => {
    return { command: key, explanation: value };
  });

  const totalCards = flashcardsArray.length;

  // State to track the current card index and card history
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardHistory, setCardHistory] = useState([0]);

  // Function to generate a random index
  const getRandomCardIndex = () => {
    return Math.floor(Math.random() * flashcardsArray.length);
  };

  // Handle showing the next card randomly
  const handleNextCard = () => {
    const nextIndex = getRandomCardIndex();
    setCurrentCardIndex(nextIndex);
    setCardHistory((prevHistory) => [...prevHistory, nextIndex]);
  };

  // Handle showing the previous card
  const handlePreviousCard = () => {
    setCardHistory((prevHistory) => {
      if (prevHistory.length > 1) {
        // Remove the current card from the history and go to the previous card
        const newHistory = [...prevHistory];
        newHistory.pop();
        setCurrentCardIndex(newHistory[newHistory.length - 1]);
        return newHistory;
      }
      return prevHistory;
    });
  };

  return (
    <>
      <div className='w-screen mx-8 p-8'>
        <div className='bg-gray-700 m-8 p-8 rounded-xl border-2 border-blue-300'>
          <div className='container  bg-gray-700 text-center text-white'>
            <div className='flex justify-center'>
              <img src={cards} className='logo w-3/4 md:w-1/2 lg:w-1/3' alt='Flashcards' />
            </div>

            <h1 className='mb-12 text-3xl text-white font-bold text-center'>
              Flashcards: Git Basics
            </h1>
            <h2 className='text-2xl'>Total Cards: {totalCards}</h2>
            <p className='text-lg mt-4 mb-12'>
              Learn basic Git commands and concepts essential for version control and collaboration
              with GitHub.
            </p>
          </div>

          <div className='p-4 md:p-16'>
            <Cards flashcard={flashcardsArray[currentCardIndex]} />

            <div className='flex justify-between mt-4'>
              <button
                className='bg-amber-600 text-white px-4 py-2 rounded'
                disabled={cardHistory.length <= 1}
                onClick={handlePreviousCard}>
                Previous Card
              </button>

              <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleNextCard}>
                Next Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
