import { ReactNode } from 'react';
import styled from 'styled-components';
import Bg3 from '../assets/images/Bg3.png';
import Sidebar from './SideBar';

type Props = {
  children: ReactNode;
}

const Theme = ({ children }: Props) => {
  return(
    <Container>
      <BoxContentWrapper>

        <Content>
          {children}
        </Content>
        
        <Sidebar />
      </BoxContentWrapper>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  height: 100vh;
  padding: 2rem 1rem;
  background-attachment: fixed;
  background-color: var(--bg-color);
  background-image: url(${Bg3});
  background-repeat: no-repeat;
  background-position: cover;
  background-size: 100% 100%;
  overflow-y: auto;

  & {
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-color) transparent;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 3px; /* A altura só é vista quando a rolagem é horizontal */
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
  }
`;

const BoxContentWrapper = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 300px) 300px;
  padding-top: 35px;
`;

const Content = styled.div`
  display: inherit;
  color: var(--primary-color);
`;

const Footer = styled.footer`
  font-size: 1rem;
  text-align: left;
  color: var(--primary-color);
  padding-left: 35px;
  margin-top: auto;
`;

export default Theme;