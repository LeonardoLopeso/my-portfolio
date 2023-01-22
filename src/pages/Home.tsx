import styled from 'styled-components';
import ImgLeo from '../assets/images/img-leo.png';
import { motion } from 'framer-motion';

const Home = () => {
  return(
    <Container>
      <motion.div 
        initial={{ y: 100 }} 
        animate={{ y: 0 }}
      >
        <img src={ImgLeo} alt="Leonardo Lopes" />
      </motion.div>
      <h3>Leonardo Lopes de Oliveira</h3>
      <h4>Desenvolvedor de Sistemas</h4>
      <p>Olá, Sou o Leonardo Lopes! Sou desenvolvedor de sistemas web há quase 2 anos, 
        especializado em front-end utilizando as tecnologias HTML5, CSS3, JavaScript,JQuery, ReactJS, TypeScript, Bootstrap entre outras stacks. Atuando essencialmente na modelagem, desenvolvimento de telas e aprimoramento da UX/UI para consumo de API's. Sendo Responsável por todo o ciclo de desenvolvimento desde a prototipação, deploy e publicação.
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 5%;
  color: var(--primary-color);

  div {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    background-color: var(--layer-bg);
    border-radius: 100%;

    img {
      position: absolute;
      bottom: 1px;
      max-width: 380px;
      max-height: 380px;
      object-fit: cover;
      z-index: 10;
      clip-path: ellipse(48% 50%);
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
  }
  h4, p {
    font-size: 1.37rem;
    font-weight: 300;
  }
  p {
    font-size: 1.2rem;
    max-width: 825px;
    margin-top: 25px;
    text-align: center;
  }
`;

export default Home;