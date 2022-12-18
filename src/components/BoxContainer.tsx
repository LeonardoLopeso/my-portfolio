import { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  children: ReactNode;
}

const BoxContainer = ({ title, children }: IProps) => {

  return(
    <Container>
      <h1>{title}</h1>

      {children}
      
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  h1 {
    color: #fff;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }
`;

export default BoxContainer;