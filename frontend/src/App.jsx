import { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    api.get("/users").then(res => setUsers(res.data));
  }, []);

  const addUser = () => {
    api.post("/users", { name, email }).then(() => {
      setUsers([...users, { name, email }]);
      setName("");
      setEmail("");
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Updated Users 234</h2>

      <input placeholder="Name" value={name}
        onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email}
        onChange={e => setEmail(e.target.value)} />

      <button onClick={addUser}>Add</button>

      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
