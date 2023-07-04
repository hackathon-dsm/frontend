import { useState, ChangeEvent } from "react";

export const useForm = <T>(initial: T) => {
  const [state, setState] = useState<T>(initial);

  const onHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  return { state, onHandleChange, setState };
};
