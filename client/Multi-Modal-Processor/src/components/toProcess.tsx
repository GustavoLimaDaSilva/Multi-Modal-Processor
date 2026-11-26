import type { DataModalities } from "../types";

type props = {
  dataModality: DataModalities | null;
  toProcessRef: React.RefObject<string | File | null>;
};

export function ToProcess({ dataModality, toProcessRef }: props) {
  return (
    <input
      type={dataModality === "PDF" ? "file" : "url"}
      name={dataModality === "PDF" ? "PDF-input" : "website-input"}
      className="input-to-process"
      onChange={(e) => {
        const input = e.target;
        const file = input.files?.item(0);
        const url = input.value;
        if (dataModality === "PDF" && !file) return;

        toProcessRef.current = dataModality === "PDF" ? (file as File) : url;
      }}
    />
  );
}
