import type { DataModalities } from "../types";

type props = {
  dataModality: DataModalities | null;
};

export default function InsertPrompt({ dataModality }: props) {

  return (
    <>
      <label htmlFor="prompt-input" className="form-label">Send Instructions</label>
      <textarea
        name="prompt-input"
        className="prompt-input"
        placeholder="What should we do?"
      ></textarea>
    </>
  );
}
