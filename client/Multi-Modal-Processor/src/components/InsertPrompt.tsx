import type { DataModalities } from "../types";

type props = {
  dataModality: DataModalities | null;
  promptRef: React.RefObject<string>;
};

export default function InsertPrompt({ dataModality, promptRef }: props) {
  return (
    <>
      <label htmlFor="prompt-input" className="form-label">
        Send Instructions
      </label>
      <textarea
        name="prompt"
        className="prompt-input"
        placeholder="What should we do?"
        onChange={(e) => promptRef.current = e.target.value}
      ></textarea>
    </>
  );
}
