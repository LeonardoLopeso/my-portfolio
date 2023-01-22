import { createContext, useContext, useState } from 'react';

interface MainContextData {
  isOpenSidebar: boolean;
  openAndCloseSidebar: () => void;
}

const MainContext = createContext<MainContextData>({} as MainContextData);

const MainProvider = ({ children }: any) => {

  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  
  const openAndCloseSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  }
  
  return(
    <MainContext.Provider value={{
      isOpenSidebar,
      openAndCloseSidebar
    }}>
      {children}
    </MainContext.Provider>
  )
};

function useMain(): MainContextData {
  const context = useContext(MainContext);

  if(!context) {
    throw new Error("useMain must be used within an MainProvider");
  }

  return context;
}

export { MainProvider, useMain };