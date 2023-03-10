import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddTeacher({ teacher, setTeacher }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
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
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        name="gender"
        type="text"
        placeholder="Gender"
        onChange={(event) => setGender(event.target.value)}
      />
      <input
        name="address"
        type="text"
        placeholder="Address"
        onChange={(event) => setAddress(event.target.value)}
      />
      <input
        name="street"
        type="text"
        placeholder="Street"
        onChange={(event) => setStreet(event.target.value)}
      />
      <input
        name="city"
        type="text"
        placeholder="City"
        onChange={(event) => setCity(event.target.value)}
      />
      <input
        name="state"
        type="text"
        placeholder="state"
        onChange={(event) => setState(event.target.value)}
      />
      <input
        name="country"
        type="text"
        placeholder="country"
        onChange={(event) => setCountry(event.target.value)}
      />
      <input
        name="zip"
        type="text"
        placeholder="zip"
        onChange={(event) => setZip(event.target.value)}
      />
      <input
        name="email"
        type="text"
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
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
            address: address,
            street: street,
            city: city,
            state: state,
            country: country,
            zip: zip,
            email: email,
            phone: phone,
          };
          setTeacher([...teacher, newStud]);
          navigate("/teacher-list");
        }}
      >
        Add
      </button>
    </div>
  );
}
