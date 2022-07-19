import { useContext } from 'react';
import { gameContext } from 'context/Context';
import { useDrag } from 'react-dnd';
import itemTypes from 'gameTypes/items';
import actionsTypes from 'gameTypes/actions';

const Bonus = ({ id, text }) => {
  const { dispatch } = useContext(gameContext);
  const [{ isDragging }, dragRef] = useDrag({
    type: itemTypes.BONUS,
    item: { id, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        const location = 'side';
        const addBonusToDrop = (location, id, text) => {
          dispatch({
            type: actionsTypes.BONUS_SET,
            payload: { location, id, text },
          });
        };
        addBonusToDrop(location, item.id, item.text);
      }
    },
  });

  return (
    <div className="Bonus__item" opacity={isDragging ? 0.5 : 1} ref={dragRef}>
      <img
        src={`https://via.placeholder.com/40x40.png?text=${text}`}
        alt="Name pic"
        className="Bonus__img"
      />
    </div>
  );
};

export default Bonus;
