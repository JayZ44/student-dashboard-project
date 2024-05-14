import { useState } from "react";
import moment from "moment";
import Aside from "./Aside";
import { useEffect } from "react";
import students from "./data/data.json";
import Student from "./Student";
//because the map function is being invoked in the list file where this is being rendered, instead of using Students we use student (horrid variable names)
export default function StudentList() {
  //   const [button, setButton] = useState(false);

  const [Students, setStudents] = useState([]);
  // console.log(students);
  useEffect(() => {
    setStudents(students);
  }, []);

  //   console.log(Students);
  return (
    <div className="Page">
      <Aside setStudents={setStudents} Students={Students} />
      <h2>All Students</h2>
      <h4>Total Students {Students.length}</h4>
      <ul>
        {Students.map((student) => {
          return <Student key={student.id} student={student} />;
        })}
      </ul>
    </div>
  );
}
