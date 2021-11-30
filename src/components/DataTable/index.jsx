import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import orderBy from "lodash/orderBy";
import Row from "./Row";

const DataTable = ({ data }) => {
  const [localData, setLocalData] = useState(data);
  const [keyword, setKeyword] = useState("");
  const [sortDir, setSortDir] = useState([]);

  const handleInputChange = (e) => setKeyword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const filterData = (keyword) => {
    if (!keyword) {
      setLocalData(data);
    }
    const filterdItems = data.filter((itm) =>
      Object.values(itm).some((val) =>
        "".concat(val).toLowerCase().includes(keyword)
      )
    );
    setLocalData(filterdItems);
  };

  const sortData = ([key, dir]) => {
    const sorted = orderBy(localData, [key], [dir]);
    setLocalData(sorted);
  };

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  useEffect(() => {
    filterData(keyword);
  }, [keyword]);

  useEffect(() => {
    sortData(sortDir);
  }, [sortDir]);

  const onSortClick = (key) => {
    const [currentKey, currentSort] = sortDir;
    if (currentKey === key && currentSort === "asc") {
      return setSortDir([key, "desc"]);
    }
    return setSortDir([key, "asc"]);
  };

  return (
    <Fragment>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={handleInputChange}
          className="border border-gray-200 w-3/4"
          placeholder="Start searching"
        />
      </form>

      <div className="w-full">
        <div className="flex flex-nowrap justify-start w-full">
          <div
            onClick={() => onSortClick("location.city")}
            className="p-1 w-2/12"
          >
            city
          </div>
          <div
            onClick={() => onSortClick("location.state")}
            className="p-1 w-2/12"
          >
            state
          </div>
          <div
            onClick={() => onSortClick("location.country")}
            className="p-1 w-2/12"
          >
            countrty
          </div>
          <div
            onClick={() => onSortClick("location.postcode")}
            className="p-1 w-2/12"
          >
            postcode
          </div>
          <div
            onClick={() => onSortClick("location.street.number")}
            className="p-1 w-2/12"
          >
            number
          </div>
          <div onClick={() => onSortClick("name.first")} className="p-1 w-2/12">
            name
          </div>
          <div
            onClick={() => onSortClick("location.coordinates.latitude")}
            className="p-1 w-2/12"
          >
            latitude
          </div>
          <div
            onClick={() => onSortClick("location.coordinates.longitude")}
            className="p-1 w-2/12"
          >
            longitude
          </div>
        </div>
        {localData.map((row) => (
          <Row key={row.email} data={row} />
        ))}
      </div>
    </Fragment>
  );
};

DataTable.propTypes = {
  data: PropTypes.array,
};

export default DataTable;
