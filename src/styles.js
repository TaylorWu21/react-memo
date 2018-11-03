import styled, {
  keyframes,
} from 'styled-components';
import {
  Image,
} from 'semantic-ui-react';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled(Image)`
  animation: ${rotate} 3s linear infinite;
`;
