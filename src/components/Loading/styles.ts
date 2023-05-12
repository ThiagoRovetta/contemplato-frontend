import styled, { keyframes } from 'styled-components';

export const spinnerAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
	position: fixed;
	top: calc(50% - 1rem);
	left: calc(50% - 1.5rem);
	z-index: 98;

  .spinner {
    height: 3.5rem !important;
    width: 3.5rem !important;
    border-width: 0.3em;

    animation: ${spinnerAnimation} 1s linear infinite;
  }
`;

export const Overlay = styled.svg`
  height: 100vh;
  width: 100%;

  position: fixed;

  opacity: 0.5;
  top: 0;
  left: 0;
  z-index: 99;

  background: linear-gradient(90deg, #2d3338, black) no-repeat;
`;
