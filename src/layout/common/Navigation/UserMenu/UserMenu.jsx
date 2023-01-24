import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';

export const UserMenu = ({ location }) => {
  return (
    <UserBox>
      <StyledNavLink to="profile" state={{ from: location }}>
        <BsPerson />
      </StyledNavLink>
    </UserBox>
  );
};

const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledNavLink = styled(NavLink)`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii.round};
  padding: ${p => p.theme.space[1]}px;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.6),
    10px 10px 15px rgba(70, 70, 70, 0.18);
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.shadow};
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[0]}px;
  svg {
    width: 30px;
    height: 30px;
    color: ${p => p.theme.colors.black};
    &:hover {
      color: ${p => p.theme.colors.accent};
    }
  }
  &:hover {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;
