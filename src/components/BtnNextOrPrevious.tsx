import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IProp {
  title: string;
  path: string;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
}
const BtnNextOrPrevious = ({ title, path, iconLeft, iconRight }: IProp) => {
  const navigate = useNavigate();

  return(
    <Container onClick={() => navigate(`${path}`)}>{iconLeft} {title} {iconRight}</Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap:1rem;
  padding: 5px 8px;
  border-radius: 8px;
  background-color: var(--layer-bg);
  margin-top: 2rem;
  cursor: pointer;
  border: 1px solid rgba(255,255,255, .4);
  transition: all .3s ease;

  &:hover {
    opacity: .8;
    color: rgba(255,255,255, .8);
  }
`;

export default BtnNextOrPrevious;