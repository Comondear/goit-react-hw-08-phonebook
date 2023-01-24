import styled from 'styled-components';

export const IconButton = styled.button`
  transition: all 0.3s ease;
  margin-left: auto;
  padding: ${p => p.theme.space[0]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background: transparent;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  svg {
    color: ${p => p.theme.colors.black};
  }
  &:hover {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
  }
`;
