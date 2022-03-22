import React from 'react';
import TopicsItems from './TopicsItems';
function Topics() {
  return (
    <div className="Topics">
      <div className="Title-Topics u-center-text">
        <span className="flame">🔥</span>
        <h2>Hot Topics</h2>
        <span className="flame">🔥</span>
      </div>
      <TopicsItems />
    </div>
  );
}

export default Topics;
