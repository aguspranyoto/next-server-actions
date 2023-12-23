"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ButtonDeleteProps {
  id: Id;
}
interface Id {
  id: number;
}

const ButtonDelete: FC<ButtonDeleteProps> = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id: Id) => {
    try {
      await fetch(`/api/student/delete/${id}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.log("error", error);
    }
  };
  return <button onClick={() => handleDelete(id)}>Delete</button>;
};
export default ButtonDelete;
