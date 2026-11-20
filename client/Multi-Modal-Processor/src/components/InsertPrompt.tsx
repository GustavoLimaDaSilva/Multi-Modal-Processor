import type { DataModalities } from "../types";

type props = {
  dataModality: DataModalities | null;
};

export default function InsertPrompt({ dataModality }: props) {
  const defaultPrompt = `Summarize ${dataModality === null ? "these informations" : `this ${dataModality}`} and extract insights`;

  return (
    <>
      <h2>Send Instructions</h2>
      <p>{defaultPrompt}</p>
      <textarea
        name="prompt-input"
        className="prompt-input"
        placeholder="What should we do?"
      ></textarea>
    </>
  );
}
