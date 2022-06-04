import {createReadStream} from 'fs';
import {stdout} from 'node:process';

export const read = async () => {
  const fileName = 'src/streams/files/fileToRead.txt';
  const readStream = createReadStream(fileName);

  readStream
      .on('data', chunk => {
        stdout.write(chunk)
      })
};
await read()
