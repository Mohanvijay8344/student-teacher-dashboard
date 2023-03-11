import { StudentList } from "./StudentList";
import { useEffect, useState } from "react";

export function Student() {
  const [student, setStudent] = useState([])
  const get = () => {
    fetch("https://63d75fbcafbba6b7c93beb74.mockapi.io/students")
    .then((res) => res.json())
    .then((stu) => setStudent(stu))
  }
  

    useEffect(() => get(),[]);

  const remove = (id) => {
    fetch(`https://63d75fbcafbba6b7c93beb74.mockapi.io/students/${id}`, {
      method: "DELETE",
    }).then(() => get());
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
