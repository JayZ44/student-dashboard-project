import { useState } from "react";
import Form from "./Form";
import moment from "moment";

export default function Student({ handleButtonClick, student, setStudents }) {
  const [button, setButton] = useState(false);
  function handleButtonClick() {
    setButton(!button);
  }
  //   console.log(Students);
  // console.log("This is the prefferred name data:", student.names.preferredName);
  return (
    <li key={student.id} className="studentLi">
      <span>
        <img
          src={student.profilePhoto}
          alt={student.names.preferredName}
          className="profilePhoto"
        />
      </span>
      <span className="onTrack">
        {!Object.values(student.certifications).includes(false) ? (
          <span>On Track to Graduate</span>
        ) : (
          <span>Needs More Time</span>
        )}
      </span>
      <span className="identification">
        <h3>
          {student.names.preferredName} {student.names.middleName[0]}.{" "}
          {student.names.surname}
        </h3>
        {student.username} <br />
        <span style={{ color: "rgb(119, 157, 119)" }}>Birthday: </span>
        {moment(student.dob).format("LL")}
      </span>
      <span>
        <button
          className="showButton"
          type="click"
          id={student.names.preferredName}
          onClick={handleButtonClick}
        >
          {button ? "Show less." : "Show more..."}
        </button>
      </span>

      {!button ? (
        ""
      ) : (
        <div>
          <div className="certifications">
            <div>
              <h2>Codewars:</h2>
              <p>
                <span>Current: </span>
                {student.codewars.current.total}
              </p>
              <p>
                <span>Last Week: </span>
                {student.codewars.current.lastWeek}
              </p>
              <p>
                <span>Goal: </span>
                {student.codewars.goal.total}
              </p>
              <p>
                <span>Percentage of Goal Achieved: </span>
                {Math.round(
                  student.codewars.current.total /
                    (student.codewars.goal.total / 100)
                )}
                %
              </p>
            </div>

            <div>
              <h2>Scores</h2>
              <p>
                <span>Assignments:</span> {student.cohort.scores.assignments}
              </p>
              <p>
                <span>Projects:</span> {student.cohort.scores.projects}
              </p>
              <p>
                <span>Assessments:</span> {student.cohort.scores.assessments}
              </p>
            </div>

            <div>
              <h2>Certifications</h2>
              <p>
                <span>Resume:</span>{" "}
                {student.certifications.resume ? "✅" : "❌"}
              </p>
              <p>
                <span>LinkedIn:</span>{" "}
                {student.certifications.linkedin ? "✅" : "❌"}
              </p>
              <p>
                <span>Mock Interview: </span>

                {student.certifications.mockInterview ? "✅" : "❌"}
              </p>

              <p>
                <span>GitHub: </span>
                {student.certifications.github ? "✅" : "❌"}
              </p>
            </div>
          </div>
          <div>
            <Form
              key={student.id}
              student={student}
              setStudents={setStudents}
            />
          </div>
        </div>
      )}
    </li>
  );
}
