import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BoxContainer from '../components/BoxContainer';
import BoxInformations from '../components/BoxInfomations';
import BtnNextOrPrevious from '../components/BtnNextOrPrevious';

import { ListFormation } from '../data';

const Formation = () => {
  const navigate = useNavigate();

  return(
    <BoxContainer title='Formação'>
      {ListFormation.map((item, key) => (
        <BoxInformations type={item.type} title={item.title} formation={item.formation} />
      ))}

      <PreviousNext>
        <BtnNextOrPrevious 
          title='Página Anterior'
          path='/'
          iconLeft={<FaArrowLeft />}
        />

        <BtnNextOrPrevious 
          title='Próxima Página'
          path='/experiencia'
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

export default Formation;