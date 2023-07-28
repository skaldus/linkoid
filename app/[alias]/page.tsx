import React from "react";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

interface AliasPageProps {
  params: {
    alias: string;
  };
}

const AliasPage = async ({ params }: AliasPageProps) => {
  const { alias } = params;

  const destination = await db.link.findUnique({
    where: { alias },
  });

  if (!destination) return <p>This URL was not found!</p>;

  await db.link.update({
    data: { clicked: destination.clicked + 1 },
    where: { alias },
  });

  return redirect(destination.url);
};

export default AliasPage;
