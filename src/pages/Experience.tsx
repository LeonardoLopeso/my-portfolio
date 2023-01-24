import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BoxContainer from "../components/BoxContainer";
import BoxInfoProfessional from "../components/BoxInfoProfisional";
import BtnNextOrPrevious from '../components/BtnNextOrPrevious';

const Experience = () => {
  const navigate = useNavigate();

  return(
    <BoxContainer title="Experiência">
      <BoxInfoProfessional />

      <PreviousNext>
        <BtnNextOrPrevious 
          title='Página Anterior'
          path='/formacao'
          iconLeft={<FaArrowLeft />}
        />

        <BtnNextOrPrevious 
          title='Próxima Página'
          path='/habilidades'
          iconRight={<FaArrowRight />}
        />

      </PreviousNext>
    </BoxContainer>
  );
}

const PreviousNext = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    gap:1rem;
    margin-top: 2rem;
    padding: 5px 8px;
    border-radius: 8px;
    background-color: var(--layer-bg);

    &:hover {
      opacity: .8;
      color: rgba(255,255,255, .8);
    }
  }
`;

export default Experience;