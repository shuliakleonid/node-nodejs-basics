import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  const readedStream = createReadStream(__dirname + '/files/fileToCompress.txt');
  const writedStream = createWriteStream(__dirname + '/files/archive.gz');
  const toGz = createGzip();

  readedStream.pipe(toGz).pipe(writedStream);
  console.log('fileToCompress.txt archived!');
};

compress();
