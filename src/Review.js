import React from 'react';
import './index.css';

function Review(props) {
	return (
		<div className="review-card">
      <div className="review-content">
        <div style={{ padding: '0 20px 0 30px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ width: '90%' }}>{props.name}</h2>
            <a
              className="link"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="telegram-icon" />
              <span className="array-corner-icon" />
            </a>
          </div>
          <p className="review">{props.text}</p>
        </div>
      </div>
    </div>
	);
}

export default Review;
