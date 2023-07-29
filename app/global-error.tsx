"use client";

import { Button } from "@/components/ui/Button";
import Error from "next/error";
import React from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <html>
      <body className="w-screen h-screen flex items-center justify-center flex-col gap-4">
        <h1>Something went wrong!</h1>
        <Button variant={"outline"} onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  );
};

export default ErrorPage;
