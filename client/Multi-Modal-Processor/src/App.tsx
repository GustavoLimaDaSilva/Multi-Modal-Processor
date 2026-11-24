import { useState } from "react";
import type { DataModalities } from "./types";
import Select from "./components/select";
import InsertPrompt from "./components/InsertPrompt";

function App() {
  const [dataModality, setDataModality] = useState<DataModalities | null>(null);
  return (
    <>
      <div className="vertical-align">
        <form className="form DORFic-card">
          <Select setDataModality={setDataModality} />
          {dataModality === "PDF" ? (
            <input type="file" className="file-input" />
          ) : dataModality === "website" ? (
            <input type="url" placeholder="insert an URL" />
          ) : null}
          <InsertPrompt dataModality={dataModality} />
          <button
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              const res = await fetch(
                "https://api-kda2srt4rq-uc.a.run.app/PDF/processor",
                {
                   body: JSON.stringify({a: 1, b: 2}),
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                },
              );
            }}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
