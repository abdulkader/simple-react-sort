import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import AppContextProvider from "./context/AppContext";
import HomePage from "./components/Page/Home";

const queryclient = new QueryClient();
const App = () => {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryclient}>
        <HomePage />
      </QueryClientProvider>
    </AppContextProvider>
  );
};

export default App;
