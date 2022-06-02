import fs from 'fs';

export const read = async () => {
  const fileName = 'src/fs/files/fileToRead.txt';
  const errorText = 'FS operation failed';

  if (!fs.existsSync(fileName)) {
    throw Error(errorText);
  }
  fs.readFile(fileName, { encoding: 'utf8' },(err, files) => {
    console.log(files)
  })
};
read()
