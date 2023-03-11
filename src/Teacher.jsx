import { TeacherList } from "./TeacherList";
import { useEffect, useState } from "react";


export function Teacher() {
  const [teacher, setTeacher] = useState([]);
 
  const get = () => {
    fetch("https://63d75fbcafbba6b7c93beb74.mockapi.io/Teachers")
    .then((res)=>res.json())
    .then((tea)=> setTeacher(tea))
  }
    
    useEffect(() => get(),[]);

  const remove = (id) => {
    fetch(`https://63d75fbcafbba6b7c93beb74.mockapi.io/Teachers/${id}`, {
      method: "DELETE",
    }).then(() => get())
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
