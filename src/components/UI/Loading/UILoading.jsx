import React from 'react';
import './UILoading.css';

function UILoading({ show }) {
  return show && (
    <div className="loading-ui">
      <div className="loading-ring">
        <div />
      </div>
    </div>
  );
}

export default UILoading;
