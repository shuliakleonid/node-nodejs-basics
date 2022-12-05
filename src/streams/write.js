import { createWriteStream } from "fs";
import { stdin } from "node:process";
import { pathToDir } from "../utils/index.js";

export const write = async () => {
  const fileName = pathToDir(import.meta.url, "fileToWrite.txt");
  const createStream = createWriteStream(fileName);

  stdin.pipe(createStream);
};
await write();
