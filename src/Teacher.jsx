import { TeacherList } from "./TeacherList";

export function Teacher({ teacher, setTeacher }) {
  const remove = (id) => {
    const copy = teacher.filter((del) => del.id !== id);
    setTeacher(copy);
  };
  return (
    <div className="containermap">
      {teacher.map((stud, id) => (
        <TeacherList
          teach={stud}
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
