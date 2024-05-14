export function getAllStudents() {
  const URL = import.meta.env.VITE_BASE_API_URL;
  return fetch(`${URL}/students`).then((response) => response.json());
}
