import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function EditTeacher({ teacher, setTeacher }) {
  const { id } = useParams();
  const teachers = teacher[id];

  const navigate = useNavigate();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
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
      <TextField id="outlined-basic" label="Name" variant="outlined"
        name="name"
        type="text"
        placeholder="Name"
        value={teachers.name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField id="outlined-basic" label="Gender" variant="outlined"
        name="gender"
        type="text"
        placeholder="Gender"
        value={teachers.gender}
        onChange={(event) => setGender(event.target.value)}
      />
      <TextField id="outlined-basic" label="Address" variant="outlined"
        name="address"
        type="text"
        placeholder="Address"
        value={teachers.address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <TextField id="outlined-basic" label="Street" variant="outlined"
        name="street"
        type="text"
        placeholder="Street"
        value={teachers.street}
        onChange={(event) => setStreet(event.target.value)}
      />
      <TextField id="outlined-basic" label="City" variant="outlined"
        name="city"
        type="text"
        placeholder="City"
        value={teachers.city}
        onChange={(event) => setCity(event.target.value)}
      />
      <TextField id="outlined-basic" label="state" variant="outlined"
        name="state"
        type="text"
        placeholder="state"
        value={teachers.state}
        onChange={(event) => setState(event.target.value)}
      />
      <TextField id="outlined-basic" label="country" variant="outlined"
        name="country"
        type="text"
        placeholder="country"
        value={teachers.country}
        onChange={(event) => setCountry(event.target.value)}
      />
      <TextField id="outlined-basic" label="zip" variant="outlined"
        name="zip"
        type="text"
        placeholder="zip"
        value={teachers.zip}
        onChange={(event) => setZip(event.target.value)}
      />
      <TextField id="outlined-basic" label="email" variant="outlined"
        name="email"
        type="text"
        placeholder="email"
        value={teachers.email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField id="outlined-basic" label="phone" variant="outlined"
        name="phone"
        type="text"
        placeholder="phone"
        value={teachers.phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <button
        onClick={() => {
          const newStud = {
            id: id,
            name: name,
            gender: gender,
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
          navigate("/teacher-list");
        }}
      >
        Update
      </button>
    </div>
  );
}
