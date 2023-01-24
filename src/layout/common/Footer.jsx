import styled from 'styled-components';
import { VscGithubInverted } from 'react-icons/vsc';
import { Container, SocialLink } from 'components/ui';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterBox>
          <nav>
            <SocialLink
              target="_blank"
              href="https://github.com/Comondear"
              rel="noreferrer"
            >
              <VscGithubInverted />
            </SocialLink>
          </nav>
        </FooterBox>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  margin: 0 auto;
  box-shadow: inset -10px -10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  width: 100%;
`;
const FooterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
