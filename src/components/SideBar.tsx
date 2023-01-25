import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Menus } from '../data';
import { useMain } from '../context/main';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [active, setActive] = useState(1);
  const { isOpenSidebar, openAndCloseSidebar } = useMain();

  return(
    <SideBar display={isOpenSidebar}>
      <motion.div 
        initial={{ x: 300}} 
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          damping: 9,
          mass: .4,
          stiffness: 140,
          duration: 1,
        }}
      >
        <span>
          <IoMdClose 
            size={26} 
            cursor={'pointer'}
            onClick={() => openAndCloseSidebar()}
            />
        </span>
        <ul>
          {Menus.map((menu, key) => (
            <NavLink to={menu.path} key={key}>
              <li 
                className={active === key+1 ? "active" : ""}
                onClick={() => {setActive(key+1); openAndCloseSidebar()}}
              >
                  {menu.title}
              </li>
            </NavLink>
          ))}
        </ul>
      </motion.div>
    </SideBar>
  );
}

interface IPropSidebar {
  display: boolean;
}
const SideBar = styled.div<IPropSidebar>`
  display: ${({ display }) => display ? 'block' : 'none'};
  position: fixed;
  right: 25px;
  top: 20px;
  bottom: 25px;
  border-radius: 8px;
  background-color: rgba(0,0,0,.3);

  span {
    display: flex;
    justify-content: flex-end;
    padding: 15px 15px 0 0;
  }

  ul {
    list-style: none;
    margin-top: 111px;

    a {
      text-decoration: none;
    }

    li {
      font-size: 1.5rem;
      color: var(--primary-color);
      /* padding-left: 4rem; */
      text-align: right;
      padding: 0 3rem;
      line-height: 6rem;
      cursor: pointer;

      border-top-left-radius: var(--border-px);
      border-bottom-left-radius: var(--border-px);
      
      &:hover {
        background: var(--hover-color);
      }

      &.active {
        background: var(--layer-bg);
      }

    }
  }

  @media (max-width: 1200px) {
    background-color: rgba(0,0,0, .96);
    z-index: 100;
  }
`;

export default Sidebar;