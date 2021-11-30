import React from "react";
import PropTypes from "prop-types";

const Row = ({ data }) => {
  return (
    <div className="flex flex-nowrap justify-start w-full">
      <div className="p-1 w-2/12">{data?.location?.city}</div>
      <div className="p-1 w-2/12">{data?.location?.state}</div>
      <div className="p-1 w-2/12">{data?.location?.country}</div>
      <div className="p-1 w-2/12">{data?.location?.postcode}</div>
      <div className="p-1 w-2/12">{data?.location?.street?.number}</div>
      <div className="p-1 w-2/12">{`${data?.name?.first} ${data?.name?.last}`}</div>
      <div className="p-1 w-2/12">{data?.location?.coordinates?.latitude}</div>
      <div className="p-1 w-2/12">{data?.location?.coordinates?.longitude}</div>
    </div>
  );
};

Row.propTypes = {
  data: PropTypes.object,
};

export default Row;
