import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const PrimaryButton = styled.button`
  transition: all 0.3s ease;
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[0]}px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.m};
  }
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
  color: black;
  background: white;
  border-radius: ${p => p.theme.radii.normal};
  outline: none;
  border: none;
  &:hover {
    // cursor: pointer;
    // background-color: ${p => p.theme.colors.accent};
    // box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
    color: ${p => p.theme.colors.accent};
  }
`;
