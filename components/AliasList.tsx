"use client";

import React from "react";

import { useAliasStore } from "@/store/alias";
import AliasCard from "./AliasCard";

const AliasList = () => {
  const { aliases } = useAliasStore();

  return (
    <div className="flex flex-col gap-4 mb-4">
      {aliases.map((alias) => (
        <AliasCard alias={alias} key={alias} />
      ))}
    </div>
  );
};

export default AliasList;
