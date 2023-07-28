import { customAlphabet } from "nanoid";

import { db } from "./db";

export const checkIfAliasExists = async (alias: string) => {
  const dbAlias = await db.link.findUnique({ where: { alias: alias } });

  return !!dbAlias;
};

export const storeAlias = async (alias: string, url: string) => {
  const dbAlias = await db.link.create({
    data: {
      alias,
      url,
    },
  });

  return dbAlias;
};

export const generateAlias = async (): Promise<string> => {
  const nanoid = customAlphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    7
  );

  const alias = nanoid();
  const exists = await checkIfAliasExists(alias);

  if (exists) return await generateAlias();

  return alias;
};
