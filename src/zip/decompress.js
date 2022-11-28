import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
  const writedStream = createWriteStream(
    __dirname + '/files/fileToCompress.txt'
  );
  const readedStream = createReadStream(__dirname + '/files/archive.gz');
  const fromGz = createUnzip();
  readedStream.pipe(fromGz).pipe(writedStream);
  console.log('archive.gz unarchived!');
};
decompress();
