import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import BoxContainer from "../components/BoxContainer";
import BoxSkills from "../components/BoxSkills";
import BtnNextOrPrevious from "../components/BtnNextOrPrevious";

const Skills = () => {
  const navigate = useNavigate();

  return(
    <BoxContainer title="Habilidades">
      <BoxSkills />

      <PreviousNext>
        <BtnNextOrPrevious 
          title='Página Anterior'
          path='/experiencia'
          iconLeft={<FaArrowLeft />}
        />

        <BtnNextOrPrevious 
          title='Próxima Página'
          path='/projetos'
          iconRight={<FaArrowRight />}
        />

      </PreviousNext>
    </BoxContainer>
  );
}

const PreviousNext = styled.div`
  display: flex;
  justify-content: space-between;
`;


export default Skills;