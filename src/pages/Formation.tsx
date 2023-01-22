import styled from 'styled-components';
import BoxContainer from '../components/BoxContainer';
import BoxInformations from '../components/BoxInfomations';

import { ListFormation } from '../data';

const Formation = () => {

  return(
    <BoxContainer title='Formação'>
      {ListFormation.map((item, key) => (
        <BoxInformations type={item.type} title={item.title} formation={item.formation} />
      ))}
    </BoxContainer>
  );
}

export default Formation;