import { pathToDir } from "../utils/index.js";
import { readFile } from "fs/promises";

export const read = async () => {
  const fileName = pathToDir(import.meta.url, "fileToRead.txt");
  const errorText = "FS operation failed";

  try {
    const file = await readFile(fileName, "utf8");
    console.log("-> file", file);
  } catch (error) {
    throw Error(errorText);
  }
};
read();
