import { writeFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  const pathFile = __dirname + '/files/fresh.txt';
  const content = 'I am fresh and young';
  const errorText = 'FS operation failed';

  try {
    await writeFile(pathFile, content, { flag: 'wx' });
  } catch (error) {
    throw Error(errorText);
  }
};

create();
