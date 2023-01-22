
import styled from 'styled-components';
import { ListExperience } from '../data';


const BoxInfoProfessional = () => {
  return(
    <SectionInformation>
      <div>{ListExperience?.map((i, key) => (
        <>
          <div>
            <h3>
              <span>Empresa/Instituição:</span>
              {i.company}
            </h3>
            <h3>
              <span>Período:</span>
              {i.start} - {i.end}
            </h3>
          </div>
          <ul key={key}>
            <li><span>Ocupação:  </span>{i.occupation}</li>
            <li><span>Responsabilidades:  </span>{i.description}</li>
            <li><span>Evolução:</span>
              <ul>
                {i.evolution.map((evo, index) => (
                  <li key={index}>{evo.occupation} | {evo.start} - {evo.end}</li>
                ))}
              </ul>
            </li>
            
          </ul>
        </>
      ))}</div>
    </SectionInformation>
  );
}

export const Container = styled.div``;

const SectionInformation = styled.div`
  padding: 25px 55px;
  
  div {
    
    div {
      display: flex;

      h3 {
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        font-weight: 600;
        width: 100%;
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--line-color);
        
        span {
          font-size: 1rem;
          font-weight: 400;
        }
        
      }

      &:not(:nth-child(1)) {
        margin-top: 2.5rem;
        margin-bottom: 0;
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      font-size: 1.25rem;
      font-weight: 300;
      padding-left: 1rem;
      
      li {

        span {
          font-weight: 600;
        }
      }
    }
  }
`;

export default BoxInfoProfessional;

