import styled from 'styled-components';

interface LabelContainerProps {
  variant: 'confirmed' | 'pending' | 'canceled'
}

export const LabelContainer = styled.div<LabelContainerProps>`
  width: calc(100% - 2rem);
  padding: 0.5rem 1rem;
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'confirmed':
        return '#4caf50';
      case 'pending':
        return '#dddddd';
      case 'canceled':
        return '#f44336';
    }
  }};
`;

export const LabelText = styled.p`
  font-weight: bold;
`;
