import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import StudentInfo from "./components/StudentInfo";
import Footer from "./components/Footer";

function App() {
  const students = {
    name: "Le Minh Duc",
    mssv: "22656121",
    chuyenNganh: "KTPM",
  };

  return (
    <>
      <Header title="Trang giới thiệu sinh viên" />
      <StudentInfo
        name={students.name}
        mssv={students.mssv}
        chuyenNganh={students.chuyenNganh}
      />
      <Footer />
    </>
  );
}

export default App;
