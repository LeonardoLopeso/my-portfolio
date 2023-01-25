
import styled from 'styled-components';
import { AssetsHardSkills, Skills } from '../data';
import { motion } from 'framer-motion';


const BoxSkills = () => {
  return(
    <SectionInformation>
      <SoftSkill>
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              damping: 9,
              mass: .4,
              stiffness: 150,
              duration: 1,
            }}
          >
            <h3>
              <span>Soft Skill</span>
            </h3>
          </motion.div>
          <motion.ul
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              damping: 9,
              mass: .4,
              stiffness: 150,
              duration: 1,
              delay: .2,
            }}
          >
            {Skills.map((skl, indx) => (
              <li key={indx}>{skl}</li>
            ))}   
          </motion.ul>
      </SoftSkill>
      
      <HardSkill>
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              damping: 9,
              mass: .4,
              stiffness: 150,
              duration: 1,
            }}
          >
            <h3>
              <span>Hard Skill</span>
            </h3>
          </motion.div>
          <CardHardSkill>
            {AssetsHardSkills.map((hskil, idx) => (
              <div key={idx}>
                <motion.h4
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    damping: 9,
                    mass: .4,
                    stiffness: 150,
                    duration: 1,
                    delay: .4
                  }}
                >
                  {hskil.area}
                </motion.h4>

                <div>{hskil.skill.map((i, k) => (
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      damping: 6,
                      mass: .4,
                      stiffness: 150,
                      duration: 1,
                      delay: (k/10)+1
                    }}
                  >
                    <span>{i.title}</span>
                    <img src={i.url} alt={i.title} />
                  </motion.div>
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

    @media (max-width: 400px) {
      text-align: center;
      grid-template-columns: repeat(2, 1fr);
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

