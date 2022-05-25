import { useContext } from 'react';
import { gameContext } from '../Context';
import { useDrop } from 'react-dnd';
import itemTypes from '../../gameTypes/items';
import actionsTypes from '../../gameTypes/actions';
import Bonus from './Bonus';

const BonusDrop = ({ location }) => {
  const { state, dispatch } = useContext(gameContext);
  const [{ isOver }, dropRef] = useDrop({
    accept: itemTypes.BONUS,
    drop: (item) => addBonusToDrop(item.id, item.text),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addBonusToDrop = (id, text) => {
    dispatch({
      type: actionsTypes.BONUS_SET,
      payload: { location, id, text },
    });
  };

  const filteredBonus = state.bonus.filter(
    (el) => el.location === `${location}`
  );

  const bonusItem = filteredBonus.map((el, i) => {
    return <Bonus key={i} id={el.id} location={el.location} text={el.text} />;
  });

  return (
    <div
      className={`Slots__bonus__circle ${
        isOver ? 'Slots__bonus__circle--red' : ''
      }`}
      ref={dropRef}
    >
      {bonusItem}
    </div>
  );
};

export default BonusDrop;
