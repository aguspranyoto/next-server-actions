import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.student.findMany();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, nim, email, age, address } = body;
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
