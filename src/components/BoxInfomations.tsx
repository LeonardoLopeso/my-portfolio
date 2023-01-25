
import styled from 'styled-components';
import { IFormationDetail } from '../data';
import { motion } from 'framer-motion';

interface IProps {
  title: string;
  formation: IFormationDetail[];
  type: number;
}
const BoxInformations = ({ title, formation, type }: IProps) => {
  return(
    <SectionInformation>
      <h3>{title}</h3>
      
      <motion.div
        initial={{ x: -120 }}
        animate={{ x: 0 }}
      >
        {formation?.map((i, key) => (
        
        <ul>
          <li><span>Instituição: </span>{i.institution}</li>
          <li><span>Curso: </span>{i.course}</li>
          <li><span>Carga horária: </span>{i.workload}</li>
          {type === 1 &&
            <>
              <li><span>Período: </span>{i.time_course}</li>
              <li><span>Início: </span>{i.start}</li>
              <li><span>Fim: </span>{i.end}</li>
            </>
          }
        </ul>
      ))}</motion.div>
    </SectionInformation>
  );
}

export const Container = styled.div``;

const SectionInformation = styled.div`
  padding: 25px 55px;

  h3 {
    display: flex;
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

  @media (max-width: 760px) {
    padding: 25px 10px;
  }
  @media (max-width: 500px) {
    h3 {
      font-size: 1rem;
    }

    ul {
      li {
        font-size: 1rem;
      }
    }

    div {
      flex-direction: column;
    }
  }
`;

export default BoxInformations;

