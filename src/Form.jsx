import { useState } from "react";

export default function Form({ student }) {
  const [formData, setFormData] = useState({
    commenter: "",
    comment: "",
  });

  const [studentNotes, setStudentNotes] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudentNotes(student.notes.push(formData));
    setFormData({ commenter: "", comment: "" });
  };

  // console.log(studentNotes);

  return (
    <div>
      <strong>1-on-1 Notes</strong>
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Commenter Name{" "}
            <input
              type="text"
              name="commenter"
              value={formData.commenter}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Comment{" "}
            <input
              type="text"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button type="submit" className="formButton">
            Add Note
          </button>
        </form>
      </div>
      <br />
      <ul>
        <br />
        <br />
        {/* {Object.values(formData).includes(undefined)
          ? "No comments"
          : Object.values(formData)} */}
        {student.notes.map((note) => {
          return (
            <li key={note.commenter && note.comment}>
              <span className="commenter">{note.commenter}</span> says, "
              {note.comment}"
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
