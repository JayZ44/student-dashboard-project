import { useState } from "react";

export default function Student({ handleButtonClick, student }) {
  const [button, setButton] = useState(false);
  function handleButtonClick(event) {
    setButton(!button);
  }
  //   console.log(Students);
  console.log("This is the prefferred name data:", student.names.preferredName);
  return (
    <li key={student.id} className="studentLi">
      <img
        src={student.profilePhoto}
        alt={student.names.preferredName}
        className="profilePhoto"
      />
      <br />
      {student.names.preferredName} {student.names.middleName[0]}.{" "}
      {student.names.surname} <br />
      {student.username} <br />
      Birthday: {student.dob} <br />
      <button
        type="click"
        id={student.names.preferredName}
        onClick={handleButtonClick}
      >
        {button ? "Show less..." : "Show more..."}
      </button>
      {!button
        ? student.codewars.current.total &&
          student.codewars.current.lastWeek &&
          student.certifications.resume
        : "arnar"}
    </li>
  );
}
