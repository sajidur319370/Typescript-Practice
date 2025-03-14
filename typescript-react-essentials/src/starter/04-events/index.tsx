import React, { useState } from "react";
type Person = {
  name: string;
  email: string;
};

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const text = formData.get("name") as string;
    const person: Person = {
      name: data.name as string,
      email: data.email as string,
    };
    console.log(data);
    console.log(person);
    console.log(text);
  };
  return (
    <section>
      <h2>Events</h2>
      <form onSubmit={handleOnSubmit} className="form">
        <input
          type="text"
          name="name"
          className="form-input mb-1"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          className="form-input mb-1"
          value={email}
          onChange={handleOnChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
