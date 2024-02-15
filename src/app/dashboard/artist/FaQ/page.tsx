import AddFaqDialog from "@/components/AddFaqDialog";
import AddKeyPointDialog from "@/components/AddKeyPointDialog";
import DisplayFaQs from "@/components/DisplayFaQs";
import DisplayKeyPoint from "@/components/DisplayKeyPoint";
import React from "react";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
type Props = {};

async function page({}: Props) {
  async function Revalidate() {
    "use server";
    try {
      revalidatePath("/dashboard/artist/FaQ");
    } catch (e) {
      console.log(e);
    }
  }
  const faqs = await prisma.faq.findMany();
  return (
    <div className="w-full py-10">
      <div>
        <h1 className="text-3xl font-bold">Manage FaQs</h1>
        <p>Here you can add the faqs that will appear on you landing page</p>
      </div>
      <div className="flex items-end justify-end px-10">
        <AddFaqDialog revalidate={Revalidate} />
      </div>
      <div className="mt-10">
        <DisplayFaQs data={faqs} />
      </div>
    </div>
  );
}

export default page;
