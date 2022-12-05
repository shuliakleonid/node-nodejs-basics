import { rm } from "fs/promises";
import { pathToDir } from "../utils/index.js";

export const remove = async () => {
  const deletedFile = pathToDir(import.meta.url, "fileToRemove.txt");
  const errorText = "FS operation failed";

  try {
    await rm(deletedFile);
  } catch (error) {
    throw Error(errorText);
  }
};
remove();
