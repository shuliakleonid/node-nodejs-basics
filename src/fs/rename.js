import { pathToDir } from "../utils/index.js";
import { rename as giveNewName } from "fs/promises";

export const rename = async () => {
  const fileName = pathToDir(import.meta.url, "wrongFilename.txt");
  const renamedName = pathToDir(import.meta.url, "properFilename.md");
  const errorText = "FS operation failed";

  try {
    await giveNewName(fileName, renamedName);
  } catch (error) {
    throw Error(errorText);
  }
};
rename();
