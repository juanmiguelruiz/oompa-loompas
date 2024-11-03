import * as Styled from './styles';
import { SpinnerProps } from './types';

const Spinner = ({ align, justify, ...rest }: SpinnerProps) => (
  <Styled.Container align={align} justify={justify} {...rest}>
    <Styled.Spinner>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        height="64"
        width="64"
        viewBox="0 0 600 600"
        role="progressbar"
      >
        <defs>
          <linearGradient id="Gradient1" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor={'#000'} />
            <stop offset="100%" stopColor={'#000'} />
          </linearGradient>
          <linearGradient id="Gradient2" gradientTransform="rotate(90)">
            <stop offset="20%" stopColor="transparent" />
            <stop offset="80%" stopColor={'#000'} />
          </linearGradient>
          <pattern id="Pattern" x="0" y="0" width="900" height="900" patternUnits="userSpaceOnUse">
            <g transform="rotate(0, 300, 300)">
              <rect
                shapeRendering="crispEdges"
                x="0"
                y="0"
                width="300"
                height="600"
                fill="url(#Gradient1)"
              />
              <rect
                shapeRendering="crispEdges"
                x="300"
                y="0"
                width="300"
                height="600"
                fill="url(#Gradient2)"
              />
            </g>
          </pattern>
        </defs>
        <path
          id="arc5"
          style={{ stroke: 'url(#Pattern)' }}
          fill="transparent"
          strokeWidth="60"
          d="M 364 58 A 250 250 0 1 1 235 58"
        />
      </svg>
    </Styled.Spinner>
  </Styled.Container>
);
export default Spinner;
