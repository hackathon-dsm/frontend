import { useState, ChangeEvent } from "react";

export const useForm = <T>(initial: T) => {
  const [state, setState] = useState<T>(initial);

  const onHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { value, name , type} = e.target;

    if (type === "file"){
      const file = (e.currentTarget as HTMLInputElement | null)?.files?.[0] || null;
      setState({ ...state, [name]: value });
    }
    else {
      setState({ ...state, [name]: value });

    }
  };
  return { state, onHandleChange, setState };
};
