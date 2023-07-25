import React from 'react';

const LikedSVG = ({fill}) => {
  return (
    <svg
      aria-hidden="true"
      className="like-icon"
      focusable="false"
      viewBox="0 0 24 24"
      role="img"
      width="24px"
      height="24px"
      fill={fill}
    >
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
      ></path>
    </svg>
  );
};

export default LikedSVG;
