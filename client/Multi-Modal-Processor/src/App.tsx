import { useState } from "react";
import type { DataModalities } from "./types";
import Select from "./components/select";
import InsertPrompt from "./components/InsertPrompt";

function App() {
  const [dataModality, setDataModality] = useState<DataModalities | null>(null);
  return (
    <form>
      <Select setDataModality={setDataModality} />
      {dataModality === "PDF" ? (
        <input type="file" className="file-input" />
      ) : dataModality === "website" ? (
        <input type="url" placeholder="insert an URL" />
      ) : null}
      <InsertPrompt dataModality={dataModality}/>
      <button type="submit">Send</button>
    </form>
  );
}

export default App;
