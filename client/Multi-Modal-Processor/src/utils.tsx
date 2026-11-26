import type { MyFormData } from "./types";

export function appendToFormData<T extends keyof MyFormData>(
  formData: FormData,
  key: T,
  value: MyFormData[T],
) {
  formData.append(key, value);
}
