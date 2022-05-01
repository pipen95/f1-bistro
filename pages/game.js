import Track from './../components/game/Track';
import Side from './../components/game/Side';
import { useEffect } from 'react';

const Game = () => {
  useEffect(() => {
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');

    //Fill listners
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);
  }, []);

  // Drag Functions
  const dragStart = () => {
    // this.className += ' hold';
  };
  const dragEnd = () => {
    // console.log('end');
  };
  return (
    <div className="Game">
      <Track />
      <Side />
    </div>
  );
};
export default Game;
