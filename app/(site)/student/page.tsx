import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";

const prisma = new PrismaClient();
const StudentPage = async () => {
  const students = await prisma.student.findMany();
  return (
    <div className="max-w-md mx-auto text-center py-8">
      <h1 className="text-2xl font-bold mb-6 ">Student List</h1>
      <Link
        className={buttonVariants({ className: "mb-4" })}
        href={"/student/add"}
      >
        Add new student
      </Link>
      {students.map((student) => (
        <Link href={`/student/${student.id}`}>
          <ul className="border border-gray-600" key={student.id}>
            <li>{student.name}</li>
            <li>{student.nim}</li>
            <li>{student.email}</li>
            <li>{student.age}</li>
            <li>{student.address}</li>
          </ul>
        </Link>
      ))}
    </div>
  );
};

export default StudentPage;
