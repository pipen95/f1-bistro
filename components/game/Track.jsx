const Track = () => {
  return (
    <div className="Track">
      <div className="Title">
        <div className="box">
          <img src="/img/checkered-flag.png" alt="checkered flag" />
          <h2>Bistro Bets</h2>
        </div>
      </div>
      <div className="Finish"></div>
      <div className="Slots">
        <div className="item">#1</div>
        <div className="item" style={{ marginTop: '5rem' }}>
          #2
        </div>
        <div className="item">#3</div>
        <div className="item">#4</div>
        <div className="item">#5</div>
        <div className="item">#6</div>
        <div className="item">#7</div>
        <div className="item">#8</div>
        <div className="item">#9</div>
        <div className="item">#10</div>
        <div className="item">#11</div>
        <div className="item">#12</div>
        <div className="item">#13</div>
        <div className="item">#14</div>
        <div className="item">#15</div>
        <div className="item">#16</div>
        <div className="item">#17</div>
        <div className="item">#18</div>
        <div className="item">#19</div>
        <div className="item">#20</div>
      </div>
      <div className="Submit center">
        <a href="#" className="btn btn--blue" style={{ marginTop: '1rem' }}>
          Submit <span>✈</span>
        </a>
      </div>
    </div>
  );
};

export default Track;
