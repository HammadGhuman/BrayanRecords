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

async function AdminDashboard({}: Props) {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  if (!isAuthenticated) {
    redirect("/api/auth/login");
  }

  const isAdmin = await getPermission("user:admin");
  if (!isAdmin?.isGranted) {
    redirect("/");
  }
  return <main className="flex flex-col justify-between">hammad</main>;
}

export default AdminDashboard;
