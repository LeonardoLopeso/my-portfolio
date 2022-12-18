import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Menus } from '../data';

const Sidebar = () => {
  const [active, setActive] = useState(1);

  return(
    <SideBar>
      <ul>
        {Menus.map((menu, key) => (
          <NavLink to={menu.path} key={key}>
            <li 
              className={active === key+1 ? "active" : ""}
              onClick={() => setActive(key+1)}
            >
                {menu.title}
            </li>
          </NavLink>
        ))}
      </ul>
    </SideBar>
  );
}

const SideBar = styled.div`
  position: fixed;
  right: 25px;
  top: 20px;
  bottom: 25px;
  border-radius: 8px;
  background-color: rgba(0,0,0,.1);

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
`;

export default Sidebar;