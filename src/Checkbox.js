import { useReducer } from "react";

export const Checkbox = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <>
      <label htmlFor="checked">{checked ? "checked" : "not checked"}</label>
      <input
        id="checked"
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
    </>
  );
};
