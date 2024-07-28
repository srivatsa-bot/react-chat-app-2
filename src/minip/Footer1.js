// Footer1.js
import React from 'react';

export default function Footer1({ isVisible }) {
  return (
    <div>
      {isVisible && (
        <div className='div2'>
          <footer><p>&copy; 2024 My Website. All rights reserved.</p></footer>
        </div>
      )}
    </div>
  );
}
