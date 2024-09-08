import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="bg-black text-white text-center h-screen w-screen p-10 flex items-center justify-center flex-col">
      <h1 className="text-5xl font-bold">Tauri L</h1>



      <p className="p-5">I created this while learning about Tauri and desktop development.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input className="p-2 rounded-lg mx-2 border-gray-700 border-2 bg-black"
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button className="bg-gray-700 p-2 rounded-lg font-semibold" type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
