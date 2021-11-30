import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  return (
    <AppContext.Provider value={{ tableData, setTableData }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppContextProvider;
