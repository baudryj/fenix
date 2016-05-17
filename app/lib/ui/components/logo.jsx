'use strict';

const React = require('react');

class Logo extends React.Component {
  render() {
    return (
      <svg
         viewBox="0 0 299.99999 299.68751"
         id="svg2"
         version="1.1"
         className="app-logo">
         <g transform="translate(-214.28516,-585.41582)">
           <path
              d="m 364.28516,585.41582 a 150,150 0 0 0 -150,150 150,150 0 0 0 137.52148,149.37501 125,125 0 0 1 -112.52148,-124.37501 125,125 0 0 1 125,-125 125,125 0 0 1 125,125 125,125 0 0 1 -116.15821,124.68751 150,150 0 0 0 141.15821,-149.68751 150,150 0 0 0 -150,-150 z"
              className="flame1" />
           <path
              d="m 364.28516,585.41582 a 125,125 0 0 0 -125,125 125,125 0 0 0 115.01758,124.49999 100,100 0 0 1 -90.01758,-99.49999 100,100 0 0 1 100,-100 100,100 0 0 1 100,100 100,100 0 0 1 -92.92578,99.74999 125,125 0 0 0 117.92578,-124.74999 125,125 0 0 0 -125,-125 z"
              className="flame2" />
           <path
              d="m 364.28516,585.41582 a 100,100 0 0 0 -100,100 100,100 0 0 0 92.51367,99.625 75,75 0 0 1 -67.51367,-74.625 75,75 0 0 1 75,-75 75,75 0 0 1 75,75 75,75 0 0 1 -69.69336,74.8125 100,100 0 0 0 94.69336,-99.8125 100,100 0 0 0 -100,-100 z"
              className="flame3" />
         </g>
      </svg>
    );
  }
}

module.exports = Logo;
