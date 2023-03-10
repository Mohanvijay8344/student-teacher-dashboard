import { StudentList } from "./StudentList";

export function Student({ setStudent, student }) {
  const remove = (id) => {
    const copy = student.filter((del) => del.id !== id);
    setStudent(copy);
  };
  return (
    <div className="containermap">
      {student.map((stud, id) => (
        <StudentList
          stud={stud}
          id={id}
          deletes={
            <button onClick={() => remove(stud.id)} className="delete">
              Delete
            </button>
          }
        />
      ))}
    </div>
  );
}
