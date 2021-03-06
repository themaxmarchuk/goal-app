import React from 'react';

export default function Bullet({className}) {
  return (
    <svg
      className={`${className}`}
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4.92772" cy="4.49999" r="4.04308" fill="currentColor" />
    </svg>
  );
}
