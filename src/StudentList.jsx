import { useState } from "react";
import moment from "moment";
import Aside from "./Aside";
import { useEffect } from "react";
import students from "./data/data.json";
import Student from "./Student";
import "./StudentList.css";
//because the map function is being invoked in the list file where this is being rendered, instead of using Students we use student (horrid variable names)
export default function StudentList() {
  //   const [button, setButton] = useState(false);

  const [Students, setStudents] = useState([]);
  // console.log(students);
  useEffect(() => {
    setStudents(students);
  }, []);

  const [hTwo, setHTwo] = useState("All Students");

  //   console.log(Students);
  return (
    <div>
      <div className="header">
        <h1>Student Dashboard</h1>
      </div>

      <div className="Page">
        <Aside
          setStudents={setStudents}
          Students={Students}
          hTwo={hTwo}
          setHTwo={setHTwo}
        />
        <ul className="studentsUl">
          <h2>{hTwo}</h2>
          <h4>
            Total Students{" "}
            <span style={{ color: "rgb(119, 157, 119)" }}>
              {Students.length}
            </span>{" "}
          </h4>
          {Students.map((student) => {
            return (
              <Student
                key={student.id}
                student={student}
                setStudents={setStudents}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
