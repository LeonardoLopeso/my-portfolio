import styled from 'styled-components';
import { IDataProject } from '../data';

interface IProp {
  data?: IDataProject;
  onClose: () => void;
}

const Modal = ({ data, onClose }: IProp) => {


  return(
    <Container>
      <Content
        onClick={onClose}
      >
        <Img url={data?.img}></Img>
        <div>
          <h2>{data?.title}</h2>
          <p>{data?.desc}</p>
          <span>Visualizar</span>
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .8);
  z-index: 100;
`;

const Content = styled.div`
  position: relative;
  max-width: 967px;
  min-height: 570px;
  margin: 8% auto 0 auto;
  background: rgba(217, 217, 217, .2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 200;

  &::before {
    content: 'x';
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    padding: 0 15px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgba(217, 217, 217, .2);
  }

  div {
    padding: 1.5rem 1rem; 

    h2 {
      font-size: 2rem;
      font-weight: 400;
    }
  }
`;

interface IPropImg {
  url?: string;
}
const Img = styled.div<IPropImg>`
  width: 100%;
  height: 415px;
  background-color: rgba(0,0,0, .7);
`;

export default Modal;