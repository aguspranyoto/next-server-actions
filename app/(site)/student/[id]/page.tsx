import { PrismaClient } from "@prisma/client";
import React from "react";
const prisma = new PrismaClient();
const StudentDetail = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const student = await prisma.student.findUnique({
    where: {
      id: Number(id),
    },
  });

  return (
    <div>
      <ul key={student?.id}>
        <li>{student?.name}</li>
        <li>{student?.nim}</li>
        <li>{student?.email}</li>
        <li>{student?.age}</li>
        <li>{student?.address}</li>
      </ul>
    </div>
  );
};

export default StudentDetail;
