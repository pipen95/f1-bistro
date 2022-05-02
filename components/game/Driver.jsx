const Driver = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData('driver_id', target.id);
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      className="Drivers__item"
      draggable="true"
    >
      <img
        src="https://www.f1fantasytracker.com/Images/Drivers/Verstappen.png"
        alt="Name pic"
        className="Drivers__img"
      />
    </div>
  );
};

export default Driver;
