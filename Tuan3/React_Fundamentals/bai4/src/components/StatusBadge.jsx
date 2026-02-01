import React from "react";

const StatusBadge = ({ status }) => {
  return (
    <span className={`status-badge ${status}`}>{status.toUpperCase()}</span>
  );
};

export default StatusBadge;
