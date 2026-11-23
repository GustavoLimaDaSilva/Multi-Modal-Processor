import type { DataModalities } from "../types";

type props = {
  setDataModality: React.Dispatch<React.SetStateAction<DataModalities | null>>;
};

export default function Select({ setDataModality }: props) {
  return (
    <>
      <label htmlFor="modalities" className="form-label">Select a modality</label>
      <select name="modalities" defaultValue="" onClick={setSelectedOpt}>
        <option value="" disabled>
          Choose a data format
        </option>
        <option value="PDF">PDF</option>
        <option value="website">Website</option>
      </select>
    </>
  );

  function setSelectedOpt(e: React.MouseEvent<HTMLSelectElement, MouseEvent>) {
    const selectEL = e.target as HTMLSelectElement;
    const selectedOpt = selectEL.options[selectEL.selectedIndex].value;
    if (selectedOpt) setDataModality(selectedOpt as DataModalities);
  }
}
