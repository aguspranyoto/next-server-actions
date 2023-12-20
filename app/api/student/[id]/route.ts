import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;

  const student = await prisma.student.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(student, { status: 200 });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const { name, nim, email, age, address } = await request.json();
  // update student in db
  const student = await prisma.student.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      nim,
      email,
      age,
      address,
    },
  });
  return NextResponse.json(student, { status: 201 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  // delete student from db
  const student = await prisma.student.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json("Deleted", { status: 200 });
}
