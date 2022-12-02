import { createReadStream } from "fs";
import { createHash } from "crypto";
import { pathToDir } from "../utils/index.js";

export const calculateHash = async () => {
  const fileName = pathToDir(import.meta.url, "fileToCalculateHashFor.txt");
  try {
    const readStream = createReadStream(fileName);
    const hash = createHash("sha256");

    readStream.on("data", (chunk) => hash.update(chunk));

    return new Promise((res) =>
      readStream.on("end", () => res(hash.digest("hex")))
    );
  } catch (error) {
    throw new Error(error);
  }
};
