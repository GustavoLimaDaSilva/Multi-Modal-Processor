import { ToProcess } from "./components/toProcess";
import { useRef, useState } from "react";
import type { DataModalities } from "./types";
import Select from "./components/select";
import InsertPrompt from "./components/InsertPrompt";
import { appendToFormData } from "./utils";

function App() {
  const [dataModality, setDataModality] = useState<DataModalities | null>(null);
  const promptRef = useRef<string>("");
  const toProcessRef = useRef<File | string | null>(null);

  return (
    <>
      <div className="vertical-align">
        <form
          className="form DORFic-card"
          name="form"
          id="form"
          onSubmit={sendFormData}
        >
          <Select setDataModality={setDataModality} />
          <ToProcess dataModality={dataModality} toProcessRef={toProcessRef} />
          <InsertPrompt dataModality={dataModality} promptRef={promptRef} />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );

  async function sendFormData(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (promptRef.current && dataModality && toProcessRef.current) {
      const formData = new FormData();

      appendToFormData(formData, "prompt", promptRef.current);
      appendToFormData(formData, "modality", dataModality);
      appendToFormData(formData, "ToProcess", toProcessRef.current);

      const res = await fetch(
        `https://api-kda2srt4rq-uc.a.run.app/${dataModality === "PDF" ? "PDF" : "URL"}/processor`,
        {
          method: "POST",
          body: formData,
        },
      );
    }
  }
}

export default App;
