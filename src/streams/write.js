import { createWriteStream } from 'fs';
import { stdin } from 'node:process';

export const write = async () => {
  const fileName = 'src/streams/files/fileToWrite.txt';
  const createStream = createWriteStream(fileName);

  stdin.pipe(createStream);
};
await write();
