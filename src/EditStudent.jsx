import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export function EditStudent({ setStudent, student }) {
  const { id } = useParams();
  const students = student[id];

  const navigate = useNavigate();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [Std, setStd] = useState();
  const [birthdate, setBirthdate] = useState();
  const [address, setAddress] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [zip, setZip] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  return (
    <div className="editform1">
      <TextField id="outlined-basic" label="name" variant="outlined"
        name="name"
        className="name"
        type="text"
        placeholder="Name"
        value={students.name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField id="outlined-basic" label="Gender" variant="outlined"
        name="gender"
        type="text"
        placeholder="Gender"
        value={students.gender}
        onChange={(event) => setGender(event.target.value)}
      />
      <TextField id="outlined-basic" label="Std" variant="outlined"
        name="Std"
        type="text"
        placeholder="Std"
        value={students.Std}
        onChange={(event) => setStd(event.target.value)}
      />
      <TextField id="outlined-basic" label="Birthdate" variant="outlined"
        name="birthdate"
        type="text"
        placeholder="Birthdate"
        value={students.birthdate}
        onChange={(event) => setBirthdate(event.target.value)}
      />
      <TextField id="outlined-basic" label="Address" variant="outlined"
        name="address"
        type="text"
        placeholder="Address"
        value={students.address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <TextField id="outlined-basic" label="Street" variant="outlined"
        name="street"
        type="text"
        placeholder="Street"
        value={students.street}
        onChange={(event) => setStreet(event.target.value)}
      />
      <TextField id="outlined-basic" label="City" variant="outlined"
        name="city"
        type="text"
        placeholder="City"
        value={students.city}
        onChange={(event) => setCity(event.target.value)}
      />
      <TextField id="outlined-basic" label="state" variant="outlined"
        name="state"
        type="text"
        placeholder="state"
        value={students.state}
        onChange={(event) => setState(event.target.value)}
      />
      <TextField id="outlined-basic" label="country" variant="outlined"
        name="country"
        type="text"
        placeholder="country"
        value={students.country}
        onChange={(event) => setCountry(event.target.value)}
      />
      <TextField id="outlined-basic" label="zip" variant="outlined"
        name="zip"
        type="text"
        placeholder="zip"
        value={students.zip}
        onChange={(event) => setZip(event.target.value)}
      />
      <TextField id="outlined-basic" label="email" variant="outlined"
        name="email"
        type="text"
        placeholder="email"
        value={students.email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField id="outlined-basic" label="phone" variant="outlined"
        name="phone"
        type="text"
        placeholder="phone"
        value={students.phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <button
        onClick={() => {
          const newStud = {
            id: id,
            name: name,
            gender: gender,
            Std: Std,
            birthdate: birthdate,
            address: address,
            street: street,
            city: city,
            state: state,
            country: country,
            zip: zip,
            email: email,
            phone: phone,
          };
          console.log(newStud);
          navigate("/student-list");
        }}
      >
        Update
      </button>
    </div>
  );
}
