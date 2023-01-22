import { useState } from 'react';
import styled from 'styled-components';
import BoxContainer from "../components/BoxContainer";
import Modal from '../components/Modal';
import { DataProjectToCard, IDataProject } from '../data';

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState<IDataProject>();

  const openingModal = ({ title, img, desc, link }: IDataProject) => {
    setOpenModal(true);
    setDataModal({ title, img, desc, link })
  }

  return(
    <BoxContainer title="Projetos">
      <Container>
        {DataProjectToCard.map((i, k) => (
          <CardProject key={k}>
            <ThumbProject onClick={() => openingModal({ title: i.title, img: i.img, desc: i.desc, link: i.link})}></ThumbProject>
            <BoxInfo>
              <div>
                <h2>{i.title}</h2>
                <p>{i.desc}</p>
              </div>

              <span>Visualizar</span>
            </BoxInfo>
          </CardProject>
        ))}

      </Container>

      {openModal 
        ? <Modal 
            data={dataModal}
            
            onClose={() => setOpenModal(false)}
          />
        : null
      }
    </BoxContainer>
  );
}

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 25px 55px;

  z-index: 10;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const CardProject = styled.div`
  display: flex;
  gap: 1rem;
  padding: 6px;
  height: 259px;
  border-radius: 8px;
  background: rgba(217, 217, 217, 0.02);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ThumbProject = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(217,217,217, .050);
  cursor: pointer;
`;

const BoxInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;

  div {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  span {
    max-width: 104px;
    text-align: center;
    font-weight: 500;
    padding: 5px 0;
    border-radius: 8px;
    background-color: #362145;
    cursor: pointer;
  }
`;

export default Projects;