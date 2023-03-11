import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

export function AddStudent({ setStudent, student }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [Std, setStd] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="Add">
      <TextField id="outlined-basic" label="Name" variant="outlined"
        name="name"
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField id="outlined-basic" label="Gender" variant="outlined"
        name="gender"
        type="text"
        placeholder="Gender"
        onChange={(event) => setGender(event.target.value)}
      />
      <TextField id="outlined-basic" label="Std" variant="outlined"
        name="Std"
        type="text"
        placeholder="Std"
        onChange={(event) => setStd(event.target.value)}
      />
      <TextField id="outlined-basic" label="Birthdate" variant="outlined"
        name="birthdate"
        type="text"
        placeholder="Birthdate"
        onChange={(event) => setBirthdate(event.target.value)}
      />
      <TextField id="outlined-basic" label="Address" variant="outlined"
        name="address"
        type="text"
        placeholder="Address"
        onChange={(event) => setAddress(event.target.value)}
      />
      <TextField id="outlined-basic" label="Street" variant="outlined"
        name="street"
        type="text"
        placeholder="Street"
        onChange={(event) => setStreet(event.target.value)}
      />
      <TextField id="outlined-basic" label="City" variant="outlined"
        name="city"
        type="text"
        placeholder="City"
        onChange={(event) => setCity(event.target.value)}
      />
      <TextField id="outlined-basic" label="state" variant="outlined"
        name="state"
        type="text"
        placeholder="state"
        onChange={(event) => setState(event.target.value)}
      />
      <TextField id="outlined-basic" label="country" variant="outlined"
        name="country"
        type="text"
        placeholder="country"
        onChange={(event) => setCountry(event.target.value)}
      />
      <TextField id="outlined-basic" label="zip" variant="outlined"
        name="zip"
        type="text"
        placeholder="zip"
        onChange={(event) => setZip(event.target.value)}
      />
      <inpTextField id="outlined-basic" label="email" variant="outlined"ut
        name="email"
        type="text"
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField id="outlined-basic" label="phone" variant="outlined"
        name="phone"
        type="text"
        placeholder="phone"
        onChange={(event) => setPhone(event.target.value)}
      />
      <button
        onClick={() => {
          const newStud = {
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
          setStudent([...student, newStud]);
          navigate("/student-list");
        }}
      >
        Add
      </button>
    </div>
  );
}
