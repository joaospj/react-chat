import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue: e => setValue(e.target.value),
    reset: () => setValue("")
  };
};
