import { createReadStream } from 'fs';
import { createHash } from 'crypto'


export const calculateHash = async () => {
  const fileName = 'src/hash/files/fileToCalculateHashFor.txt';
  const readStream = createReadStream(fileName);
  const hash = createHash('sha256')

  readStream.on('data',chunk => hash.update(chunk))

  return new Promise((res) => readStream.on('end',()=> res(hash.digest('hex'))))
  //test
};
