import { useState } from 'react';
import styled from 'styled-components';
import BoxContainer from '../components/BoxContainer';

import { ListFormation } from '../data';

const Formation = () => {

  return(
    <BoxContainer title='Formação'>
      {ListFormation.map((item, key) => (
        <SectionInformation>
          <h3 key={key}>{item.title}</h3>
          <div>{item.formation?.map((i, key) => (
            
            <ul>
              <li><span>Instituição: </span>{i.institution}</li>
              <li><span>Curso: </span>{i.course}</li>
              <li><span>Carga horária: </span>{i.workload}</li>
              <li><span>Período: </span>{i.time_course}</li>
              <li><span>Início: </span>{i.start}</li>
              <li><span>Fim: </span>{i.end}</li>
            </ul>
          ))}</div>
        </SectionInformation>
      ))}
    </BoxContainer>
  );
}

const SectionInformation = styled.div`
  padding: 25px 55px;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--line-color);
  }

  div {
    display: flex;
    gap: 2rem;
    font-size: 1.25rem;
    font-weight: 300;

    ul {
      list-style: none;

      span {
        font-weight: 600;
      }
    }
  }
`;

export default Formation;