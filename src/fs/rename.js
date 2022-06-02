import fs from 'fs';

export const rename = async () => {
  const fileName = 'src/fs/files/wrongFilename.txt';
  const renamedName = 'src/fs/files/properFilename.md';
  const errorText = 'FS operation failed';

  if (!fs.existsSync(fileName) || fs.existsSync(renamedName)) {
    throw Error(errorText);
  }

  fs.rename(fileName, renamedName, () => {
    console.log('File Renamed!');
  })
};
rename()
