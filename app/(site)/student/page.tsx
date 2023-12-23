import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import AddForm from "@/components/AddForm";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ButtonDelete from "@/components/ButtonDelete";

const prisma = new PrismaClient();
const StudentPage = async () => {
  const students = await prisma.student.findMany();

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Student List</h1>

      <div className="w-full flex gap-6">
        <div className="w-2/6 shadow-md p-4 flex justify-center">
          <AddForm />
        </div>
        <div className="w-4/6 shadow-md p-4 flex justify-center">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>NIM</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student?.id}>
                  <TableCell>{student?.name}</TableCell>
                  <TableCell>{student?.nim}</TableCell>
                  <TableCell>{student?.email}</TableCell>
                  <TableCell>{student?.age}</TableCell>
                  <TableCell>{student?.address}</TableCell>
                  <TableCell className="space-x-2">
                    <Link href={`/student/${student?.id}`}>show</Link>
                    <Link href={`/student/edit/${student?.id}`}>edit</Link>
                    <ButtonDelete id={student?.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
