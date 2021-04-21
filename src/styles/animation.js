import { keyframes, css } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyFrames} ${type};
`

const slideDownKeyFrames = (from, to) => keyframes`
  from {
    top: ${from};
    opacity: 0;
  }

  to {
    top: ${to};
    opacity: 1;
  }
`

export const slideDown = ({ from, to, time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${slideDownKeyFrames(from, to)} ${type};
`
