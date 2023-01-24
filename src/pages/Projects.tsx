import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';
import BoxContainer from "../components/BoxContainer";
import BtnNextOrPrevious from '../components/BtnNextOrPrevious';
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
            <ThumbProject 
              onClick={() => openingModal({ title: i.title, img: i.img, desc: i.desc, link: i.link})}
            >
              <img src={i.img} alt={i.title} />
            </ThumbProject>
            <BoxInfo>
              <div>
                <h2>{i.title}</h2>
                <p>{i.desc}</p>
              </div>

              <span>
                <a href={i.link} target="_blank" rel="noreferrer">Visualizar</a>
              </span>
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

      <Previous>
        <BtnNextOrPrevious 
          title='Página Anterior'
          path='/habilidades'
          iconLeft={<FaArrowLeft />}
        />
      </Previous>
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
    padding: 25px 10px;
  }
`;

const CardProject = styled.div`
  display: flex;
  gap: 1rem;
  padding: 6px;
  min-height: 259px;
  border-radius: 8px;
  background: rgba(217, 217, 217, 0.02);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const ThumbProject = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(217,217,217, .050);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const BoxInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: .3rem 0;

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
    transition: all .4s ease;

    &:hover {
      opacity: .8;
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    span {
      margin-top: 1.2rem;
    }
  }
`;

const Previous = styled.p`
  display: flex;
  justify-content: center;
`;

export default Projects;