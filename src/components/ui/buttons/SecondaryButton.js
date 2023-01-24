import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const SecondaryButton = styled.button`
  transition: all 0.3s ease;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[0]}px;
  @media (${breakpoints.laptop}) {
    padding: ${p => p.theme.space[1]}px;
  }
  border: none;
  border-radius: ${p => p.theme.radii.round};

  outline: none;
  svg {
    width: 25px;
    height: 25px;
    background-color: transparent;
    color: white;
    border-radius: ${p => p.theme.radii.round};
    @media (${breakpoints.tablet}) {
      width: 30px;
      height: 30px;
    }
  }
  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accent};
    box-shadow: inset 0px 5px 5px 0px rgba(0, 0, 0, 0.7);
  }
`;
