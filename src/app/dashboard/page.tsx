import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

async function Dashboard({}: Props) {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  if (!isAuthenticated) {
    redirect("/api/auth/login");
  }

  const isMerchant = await getPermission("user:merchant");
  if (!isMerchant?.isGranted) {
    redirect("/");
  }
  return (
    <div className="py-10 w-full ">
      <h1 className="text-4xl font-bold">Artist Dashboard</h1>
      <p>See All the analytics from here</p>
      <div className="grid gap-3 grid-cols-2 px-3 mt-10">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Total Booked Session</CardTitle>
            <CardDescription>
              Number of booked session in this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">12</p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Total Free Slots</CardTitle>
            <CardDescription>
              Number of slots that are free in this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">2</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
            <CardDescription>The all time sales of your's</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$1000</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Reviews</CardTitle>
            <CardDescription>
              TThe Review's on your landing page
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">4</p>
          </CardContent>
        </Card>
        {/* Edit Session Price */}
      </div>
    </div>
  );
}

export default Dashboard;
