import React from "react";

const StudentInfo = ({ name, mssv, chuyenNganh }) => {
  return (
    <div className="student-info">
      <p>
        <strong>Tên: </strong>
        {name}
      </p>
      <p>
        <strong>MSSV: </strong>
        {mssv}
      </p>
      <p>
        <strong>Chuyên ngành: </strong>
        {chuyenNganh}
      </p>
    </div>
  );
};

export default StudentInfo;
