import styled from 'styled-components';
import ImgLeo from '../assets/images/img-leo.png';

const Home = () => {
  return(
    <Container>
      <div>
        <img src={ImgLeo} alt="Leonardo Lopes" />
      </div>
      <h3>Leonardo Lopes de Oliveira</h3>
      <h4>Desenvolvedor de Sistemas</h4>
      <p>Olá, Sou o Leonardo Lopes! Sou desenvolvedor de sistemas há quase 2 anos, atualmente resido em Natal — RN, Brasil. 
        Iniciei a faculdade de Análise e Desenvolvimento de Sistemas, mas tive que trancar por conta do trabalho, no entanto, 
        tenho o objetivo de finaliza-lá próximo ano. Paralelo à faculdade fiz alguns cursos online relacionado a
         desenvolvimento de sistemas. Tenho maior aptidão no desenvolvimento Front-end, sou curioso e gosto de aprender 
         coisas novas e entender como as coisas funcionam. Gosto de trabalhar em equipe, pois acredito que evoluímos 
         mais rápido e saber que estou desempenhando um ótimo trabalho é como um combustível para mim por isso estou sempre em 
         busca do próximo nível afim de entregar o meu melhor. Como hobbie gosto de tocar guitarra, 
         gosto de atividades físicas e amo praticar Taekwondo.</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  color: var(--primary-color);

  div {
    position: relative;
    width: 370px;
    height: 370px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    background-color: var(--layer-bg);
    border-radius: 100%;

    img {
      position: absolute;
      bottom: 1px;
      max-width: 420px;
      max-height: 420px;
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
    max-width: 960px;
    margin-top: 25px;
    text-align: center;
  }
`;

export default Home;