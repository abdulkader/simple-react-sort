import Header from "../Header";
import DataTable from "../DataTable";
import Loader from "../Loader";

import { useData } from "../../hooks/useData";
const Home = () => {
  const { isLoading, data } = useData();
  return (
    <div>
      <Header />
      {isLoading ? <Loader /> : <DataTable data={data?.data?.results || []} />}
    </div>
  );
};

export default Home;
