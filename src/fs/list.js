import { fileURLToPath } from "url";
import { dirname } from "path";
import { readdir } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  const folderName = __dirname + "/files";
  const errorText = "FS operation failed";

  try {
    const files = await readdir(folderName);
    files.forEach(console.log);
  } catch (error) {
    throw Error(errorText);
  }
};

list();
