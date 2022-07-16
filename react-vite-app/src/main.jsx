import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import '@fontsource/inter';
import './styles/index.scss';
import {useEffect, useState} from 'react';
import {Button} from '@mui/material';

const App = () => {
  return (
    <div
      className={css`
        display: grid;
        place-items: center;
        min-height: 100vh;
        width: 100%;
      `}
    >
      <svg
        viewBox="0 0 100 115"
        className={css`
          display: block;
          text-transform: uppercase;
          max-width: 30rem;
          max-height: 20rem;
          width: 100%;
          border: 3px solid orange;
          background: rgb(255, 242, 218);
          background: linear-gradient(
            23deg,
            rgba(255, 242, 218, 1) 0%,
            rgba(127, 198, 235, 1) 100%
          );
          tspan {
            font-size: 20px;
          }
        `}
      >
        <defs>
          <linearGradient
            id="rainbow"
            x1="0"
            x2="0"
            y1="0"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#31407e" offset="0%" />
            <stop stopColor="#F24C4C" offset="25%" />
            <stop stopColor="#EC9B3B" offset="50%" />
            <stop stopColor="#36AE7C" offset="75%" />
            <stop stopColor="#F7D716" offset="100%" />
          </linearGradient>
        </defs>
        {/* y pos is shift -20rem >>> 5 */}
        <text fill="url(#rainbow)" x={0} y={5}>
          <tspan x={0} dy={20}>
            You are
          </tspan>
          <tspan x={0} dy={20}>
            not
          </tspan>
          <tspan x={0} dy={20}>
            a banana!
          </tspan>
          <tspan x={0} dy={20}>
            is
          </tspan>
          <tspan x={0} dy={20}>
            an apple!
          </tspan>
        </text>
      </svg>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
