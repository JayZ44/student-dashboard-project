// holds routes for all pages.
import { Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllStudents } from "./api/fetch";
import StudentList from "./StudentList";
import students from "./data/data.json";
import Aside from "./Aside";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentList />} />
    </Routes>
  );
}

export default App;
