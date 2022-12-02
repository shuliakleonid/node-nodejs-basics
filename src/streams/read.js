import { createReadStream } from "fs";
import { stdout } from "node:process";
import { pathToDir } from "../utils/index.js";

export const read = async () => {
  const fileName = pathToDir(import.meta.url, "fileToRead.txt");
  const readStream = createReadStream(fileName);

  readStream.on("data", (chunk) => {
    stdout.write(chunk);
  });
};
await read();
