import { mkdir, readdir, copyFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  const destinationFolder = __dirname + "/files_copy";
  const sourceFolder = __dirname + "/files";
  const errorText = "FS operation failed";

  try {
    await mkdir(destinationFolder, { recursive: false });
    const folderFiles = await readdir(sourceFolder);
    await Promise.all(
      folderFiles.map((file) =>
        copyFile(`${sourceFolder}/${file}`, `${destinationFolder}/${file}`)
      )
    );
  } catch (err) {
    throw Error(errorText);
  }
};
copy();
