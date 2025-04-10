import React, { useRef } from 'react'

function Box() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const handleOuterClick = () => {
    if (outerRef.current) {
      outerRef.current.style.backgroundColor = 'gray';
    }
  };

  const handleInnerClick = (e) => {
    e.stopPropagation(); // prevent outer click
    if (innerRef.current) {
      innerRef.current.style.backgroundColor = 'blue';
    }
  };
  return (
    <div>
    <div style={{ padding: '2rem' }}>
      <div
        ref={outerRef}
        onClick={handleOuterClick}
        className="outer"
        style={{
          width: '90vw',
          maxWidth: '400px',
          height: '90vw',
          maxHeight: '400px',
          background: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          transition: 'background-color 0.3s ease',
          borderRadius: '10px'
        }}
      >
        <div
          ref={innerRef}
          onClick={handleInnerClick}
          className="inner"
          style={{
            width: '50%',
            height: '50%',
            background: 'green',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.3s ease',
            borderRadius: '8px'
          }}
        />
      </div>
      </div>
    </div>
  );
}


export default Box
