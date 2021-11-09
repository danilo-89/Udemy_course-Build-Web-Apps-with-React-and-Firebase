import { useState, useEffect, useRef } from 'react';
import './App.css'
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


  // in this case we will get same effect as defining 'let timeOutActive=null' outside this component so the variable value is preserved on rerenders
  const timeOutActive = useRef(null);

  useEffect(() => {

    if(choiceOne && choiceTwo) {
      if(choiceOne.src === choiceTwo.src) {
        console.log('cards match');
        setCards(prevCards => {
          return prevCards.map((card) => {
            return card.src === choiceOne.src ? {...card, matched:true} : card
          })
        })
        resetTurn();
      } else {
        console.log('cards do not match');
        timeOutActive.current = setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }

    return (() => timeOutActive.current = null)

  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards()
  }, []);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));

      // Check if there is timeOut and disable it
      if(timeOutActive.current) {
        clearTimeout(timeOutActive.current)
        timeOutActive.current = null;
      }
      
      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
  }

  // console.log(cards, turns);

  // handle a choice
  const handleChoice = (card) => {
    // Check if there is timeOut and disable it
    if(timeOutActive.current) {
      clearTimeout(timeOutActive.current)
      timeOutActive.current = null;
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(prevTurns => prevTurns + 1);
    }
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    // Check if there is timeOut and disable it
    if(timeOutActive.current) {
      clearTimeout(timeOutActive.current)
      timeOutActive.current = null;
    }
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard 
            key={card.id}
            card={card} 
            handleChoice={handleChoice}
            flipped={card===choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App