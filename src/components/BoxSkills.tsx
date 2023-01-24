
import styled from 'styled-components';
import { AssetsHardSkills, Skills } from '../data';


const BoxSkills = () => {
  return(
    <SectionInformation>
      <SoftSkill>
          <div>
            <h3>
              <span>Soft Skill</span>
            </h3>
          </div>
          <ul>
            {Skills.map((skl, indx) => (
              <li key={indx}>{skl}</li>
            ))}   
          </ul>
      </SoftSkill>
      
      <HardSkill>
          <div>
            <h3>
              <span>Hard Skill</span>
            </h3>
          </div>
          <CardHardSkill>
            {AssetsHardSkills.map((hskil, idx) => (
              <div key={idx}>
                <h4>{hskil.area}</h4>
                <div>{hskil.skill.map((i, k) => (
                  <div>
                    <span>{i.title}</span>
                    <img src={i.url} alt={i.title} />
                  </div>
                ))}</div>
              </div>
            ))}
          </CardHardSkill>
      </HardSkill>
    </SectionInformation>
  );
}

const SectionInformation = styled.div`
  padding: 25px 55px;

  @media (max-width: 760px) {
    padding: 25px 10px;
  }
`;

const SoftSkill = styled.div`
  margin-bottom: 5rem;

  div {
    display: flex;

    h3 {
      display: flex;
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--line-color);
    }

    &:not(:nth-child(1)) {
      margin-top: 2.5rem;
      margin-bottom: 0;
    }
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 1rem;
    font-size: 1.25rem;
    font-weight: 300;

    li {
      padding: 0 .5rem;
      border-radius: 8px;
      color: #fff;
      background-color: rgba(255,255,255, .2);
    }
  }
`;

const HardSkill = styled.div`
  div {
    display: flex;

    h3 {
      display: flex;
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--line-color);
    }
  }
`;

const CardHardSkill = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    margin-top: .3rem;
    margin-bottom: .5rem;

    h4 {
      width: 100%;
      font-size: 1.2rem;
      font-weight: 400;
    }

    div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0 .5rem;

      div {        
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-right: 1rem;
        border: 1px solid rgba(255,255,255, .3);
        background-color: rgba(255,255,255, .038);
        border-radius: 10px;
        padding: 1rem;

        span {
          /* font-size: .8rem; */
          color: rgba(255,255,255, .8);
        }
        
        img {
          width: 34px;
          height: 34px;
        }
      }
    }
  }

  @media (max-width: 760px) {

    div {
      justify-content: center;
    }
  }
`;

export default BoxSkills;

