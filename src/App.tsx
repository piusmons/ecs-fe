import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Function to call backend
  const triggerPing = async () => {
    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${apiBase}/api/ping`);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      setMessage(JSON.stringify(data, null, 2)); // nicely formatted
    } catch (err: any) {
      setMessage("Errsor: " + err.message);
    }
  };

  return (
    <>
      <h1>Vite + Reasactaaa</h1>

      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is adss{count}
        </button>

        <button onClick={triggerPing} style={{ marginLeft: "10px" }}>
          Ping Backend
        </button>

        {message && (
          <pre style={{ marginTop: "10px", color: "#333" }}>{message}</pre>
        )}

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
