import { useState } from "react";
import Form from "./components/Form.jsx";
import DisplayForm from "./components/DisplayForm.jsx";
function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <>
      <Form addNewUser={addUser} />
      <DisplayForm userArr={users} />
    </>
  );
}

export default App;
