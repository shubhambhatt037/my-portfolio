import styled from 'styled-components';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background-color: #02050a;
  color: white;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: #F0FFF0;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: grey;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Shubham Bhatt</Logo>
        <SocialMediaIcons>
          <SocialMediaIcon href="https://twitter.com/Shubham32189699" target="_blank"><Twitter /></SocialMediaIcon>
          <SocialMediaIcon href="https://www.linkedin.com/in/shubham-bhatt-48b002250/" target="_blank"><LinkedIn /></SocialMediaIcon>
          <SocialMediaIcon href="https://www.instagram.com/shubhambhatt037/" target="_blank"><Instagram /></SocialMediaIcon>
        </SocialMediaIcons>
        <p className='text-gray-500'>&copy; 2024 Shubham Bhatt. All rights reserved.</p>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
