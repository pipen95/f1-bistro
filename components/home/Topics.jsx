import React from 'react';
import TopicsItems from './TopicsItems';
function Topics() {
  return (
    <div className="Topics">
      <div className="Title-Topics text-center">
        <span className="flame">🔥</span>
        <h2>Hot Threads</h2>
        <span className="flame">🔥</span>
      </div>
      <TopicsItems />
    </div>
  );
}

export default Topics;
