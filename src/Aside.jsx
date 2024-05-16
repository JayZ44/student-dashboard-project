import { getUniqueCohort, getStudentsByCohort } from "./helpers";
import studentsData from "./data/data.json";

export default function Aside({ Students, setStudents, hTwo, setHTwo }) {
  let cohortArray = [];
  getUniqueCohort(studentsData, cohortArray);
  // console.log(cohortArray);

  function handleCohortClick(event) {
    // console.log("here are the students", Students);
    // filter for selected cohort
    setStudents(
      studentsData.filter(
        (student) => student.cohort.cohortCode === event.target.id
      )
    );
    setHTwo(event.target.id);
  }
  function handleAllStudentsClick() {
    setStudents(studentsData);
    setHTwo("All Students");
  }
  return (
    <div>
      <h2>Choose a Class by Start Date</h2>
      <ul className="asideUl">
        {" "}
        <li className="asideLi">
          <button type="click" onClick={handleAllStudentsClick}>
            <strong>All Students</strong>
          </button>
        </li>
        {cohortArray.map((cohort) => {
          return (
            <li className="asideLi" key={cohort}>
              <button type="click" id={cohort} onClick={handleCohortClick}>
                <strong>{cohort}</strong>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// onClick
// use the event object to access event.target.id
// use the id to filter your student list for that specific cohort
// one you have the updated array, update state with the select fellows
