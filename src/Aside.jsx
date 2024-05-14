import { getUniqueCohort, getStudentsByCohort } from "./helpers";
import studentsData from "./data/data.json";

export default function Aside({ Students, setStudents }) {
  let cohortArray = [];
  getUniqueCohort(studentsData, cohortArray);
  console.log(cohortArray);

  function handleCohortClick(event) {
    console.log("here are the students", Students);
    // filter for selected cohort

    setStudents(
      studentsData.filter(
        (student) => student.cohort.cohortCode === event.target.id
      )
    );
  }

  return (
    <div>
      <h1 className="Header">Student Dashboard</h1>
      <h2>Choose a Class by Start Date</h2>
      <ul>
        {" "}
        {cohortArray.map((cohort) => {
          return (
            <li key={cohort}>
              <button type="click" id={cohort} onClick={handleCohortClick}>
                {cohort}
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
