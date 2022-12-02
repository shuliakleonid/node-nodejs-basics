import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
  const writeStream = createWriteStream(
    __dirname + '/files/fileToCompress.txt'
  );
  const readeStream = createReadStream(__dirname + '/files/archive.gz');
  const fromGz = createUnzip();
  readeStream.pipe(fromGz).pipe(writeStream);
  console.log('archive.gz unarchived!');
};
decompress();
