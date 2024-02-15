import AddKeyPointDialog from "@/components/AddKeyPointDialog";
import DisplayKeyPoint from "@/components/DisplayKeyPoint";
import React from "react";
import prisma from "@/lib/prisma";

type Props = {};

async function page({}: Props) {
  const keypoints = await prisma.keyPoints.findMany();
  console.log(keypoints);
  return (
    <div className="w-full py-10">
      <div>
        <h1 className="text-3xl font-bold">Manage Key Points</h1>
        <p>
          Here you can add the key points/advantages of buying your session that
          will show on you'r landing page{" "}
        </p>
      </div>
      <div className="flex items-end justify-end px-10">
        <AddKeyPointDialog />
      </div>
      <div className="mt-10">
        <DisplayKeyPoint data={keypoints} />
      </div>
    </div>
  );
}

export default page;
