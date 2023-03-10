import { useNavigate } from "react-router-dom";

export function StudentList({ stud, setStudent, student, deletes }) {
  const navigate = useNavigate();
  return (
    <div className="container">
      
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAMFBMVEXk5ueutLenrrHo6uqrsbS1ur3Z3N3e4eLEyMrT1tjc3uDr7O3M0NK7wMK/w8bHy81YoToJAAADQUlEQVR4nO2a2dKeIAxA2RcFff+3rdDa/n6LkmiA6XDuvDsTQkASxgaDwWAwGAwGg8FgMBgMBv8fktnJB7exBjPZ7bsDZhui5mqH6yWwubGTZD4KxY8oEU1TqznoV6ffYkpPzSImPf8olRHRNrJav0uliPHQImD2JFR/ArbUt5o+Z9UxYLp2rTDiUiqhbVUxUyRVO162LFY5XhW1dLEVV7HWfpzjdbb/Q4Q6VtKXL2GmTl21MKkt7Wss47xAljB7+QrbEbALdzT9MkoHttrCRa5loEuYvciz6/za8AVBfS2cMVacR2KtwiP6FeKkxyR8gjrpI1LLkZauCWe1QboXUeUhIUijhSoPWYuyREjwebhDei7OgPvfi9ZKqYW1ot2KeC1O+c+IPHoSlMdPr1poK9pFRFvRpnyfBUK6LsspC10ePr0e1Z1ebCCPIj8hvgbKBalFfGnu8xeDzTgt6h+yi1fvL5D/vvb6s496Ggn0L0l9PiT1+uzW6SMlkx4YrqmG1ebV5QM467RdAGuu1Ox2lraiOK/buis9siul+440l83XFm1OJguawk266H220K8GDqpuwSMn4xmm5UCLZEF/GGbRbYdZEnn0R/U1+pORzBofXFwWF3wvg1IJKecd2YPUpiOtMSGsLrOuwRubJFsJ5aVzUYkN9YP8vSVYg+WUW54vOdG/FtOc/Kud65lZ7/hbVfgsJ0QMNYImpU9RKnHa1XgkrhiSGVcWptegRU8XstlHUJwOZnolKR3bMaNwzyJ/Q+aeP7y/HcogMb48HLGzKwwEsT7nJC26jfiG0v6pXRkwu+8r21X6gZWU7H5SHVH8/lOJRDcIThDurha6Z36KuvmWCnoEgXiJO/+1VFYJg00wiz5qShDIDoJ9egu+gtuQpLFKoF7rKfNqB5z3sIdILAJqRVFF31HAfj+6ywr1AvUZb8w7ABGQqyG6gQ8HME+P70jDKW9Twebh71K8GxE9sBsUz5MghzjRlGV9zcxKlGUXrht9y6vkp+PG6BiSoishctLhDsv1KuJnofCUlNTa+zBxvYoWPdCGp2ACp9bd4aB1fY+A9scf4bJx3CLjCyrXHEULCipECy6tBoPBYDAY9MQv6w0q9Z7J+HAAAAAASUVORK5CYII="
          alt={stud.name}
        />
      </div>
      <div className="content">
      <p>Name: {stud.name}</p>
      <p>Gender: {stud.gender}</p>
      <p>Std: {stud.Std}</p>
      <p>Birthdate: {stud.birthdate}</p>
      <p>Address: {stud.address}</p>
      <p>Street: {stud.street}</p>
      <p>City: {stud.city}</p>
      <p>State: {stud.state}</p>
      <p>Country: {stud.country}</p>
      <p>Zip: {stud.zip}</p>
      <p>Email: {stud.email}</p>
      <p>Phone: {stud.phone}</p>
      </div>
      <button
        className="edit"
        onClick={() => navigate(`/student-list/edit/${stud.id}`)}
      >
        Edit
      </button>
      {deletes}
    </div>
  );
}
