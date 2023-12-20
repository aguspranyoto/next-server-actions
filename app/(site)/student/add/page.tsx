import AddForm from "@/components/AddForm";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AddStudent = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto py-8">
        <div className="p-6 shadow-md flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-6 ">Add new student</h1>
          <Link className={buttonVariants()} href="/student">
            Back to student page
          </Link>
          <AddForm />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
