import React from 'react';

const Footer = () => {
  return (
    <div>
      <div style={{ backgroundColor: 'lightgray', overflow: 'hidden' }}>
        <div style={{ float: 'left', paddingLeft: '50px' }}>
          <p>2024 Reetika Tripathi</p>
        </div>
        <div style={{ float: 'right', display: 'flex', gap: '10px', paddingRight: '50px' }}>
          <div>
            <p>about</p>
          </div>
          <div>
            <p>book</p>
          </div>
          <div>
            <p>portfolio</p>
          </div>
          <div>
            <p>blog</p>
          </div>
          <div>
            <p>contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
