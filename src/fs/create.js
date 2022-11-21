import { writeFile } from "fs/promises";
import { pathToDir } from "../utils/index.js";

export const create = async () => {
  const pathFile = pathToDir(import.meta.url, "fresh.txt");
  const content = "I am fresh and young";
  const errorText = "FS operation failed";

  try {
    await writeFile(pathFile, content, { flag: "wx" });
  } catch (error) {
    throw Error(errorText);
  }
};

create();
