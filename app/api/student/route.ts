import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import * as z from "zod";

const prisma = new PrismaClient();

// define a schema for input validation

const studentSchema = z.object({
  name: z.string().min(1, {
    message: "name is required",
  }),
  nim: z.string().min(1, {
    message: "nim is required",
  }),
  email: z.string().email().min(1, {
    message: "email is required",
  }),
  age: z.number().min(1, {
    message: "age is required",
  }),
  address: z.string().min(1, {
    message: "address is required",
  }),
});

export async function GET() {
  const data = await prisma.student.findMany();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, nim, email, age, address } = studentSchema.parse(body);
  const data = await prisma.student.create({
    data: {
      name,
      nim,
      email,
      age,
      address,
    },
  });
  return NextResponse.json(data);
}
