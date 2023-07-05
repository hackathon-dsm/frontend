import React from "react";
import { useForm } from "../hooks/useForm";


export const TestPage = () => {
  const { state, onHandleChange } = useForm({ image: null });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기서 상태(state)를 이용하여 이미지 파일 처리 또는 다른 로직을 수행할 수 있습니다.
    console.log(state.image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={onHandleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

