import GlobalStyle from './styles/global';
import Theme from './components/Theme';
import { Route, Routes } from 'react-router-dom';
import Formation from './pages/Formation';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/formacao' element={<Formation />} />
          <Route path='/experiencia' element={<Experience />} />
          <Route path='/habilidades' element={<Skills />} />
          <Route path='/projetos' element={<Projects />} />
        </Routes>
      </Theme>
    </>
  );
}

export default App;
