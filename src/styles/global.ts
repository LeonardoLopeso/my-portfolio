import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Poppins', 'sans-serif';
    font-size: 14px;
    scroll-behavior: smooth;
  }

  :root {
    --primary-color: #A695B2;
    --element-color: #D9D9D9;
    
    --bg-color: #14081D;
    --layer-bg: rgba(217, 217, 217, .1);
    --hover-color: rgba(217, 217, 217, .050);
    --border-px: 8px;
    --line-color: rgba(166, 149, 178, .1);
    --scrollbar-color: #030005;
  }

  body {
    background: var(--bg-color);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
  }
`;