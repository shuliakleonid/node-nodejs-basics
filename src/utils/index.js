import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const pathToDir = (url, fileName) =>
  join(dirname(fileURLToPath(url)), "files", fileName);
