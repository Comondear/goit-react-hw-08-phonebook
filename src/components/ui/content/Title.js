import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const Title = styled.h2`
  margin: ${p => p.theme.space[2]}px 0 ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semibold};
  color: black;
  text-align: center;
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin: ${p => p.theme.space[3]}px 0;
  }
  @media (${breakpoints.laptop}) {
    margin: ${p => p.theme.space[5]}px 0 ${p => p.theme.space[2]}px;
  } ;
`;
