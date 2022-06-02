import fs from 'fs'
import path from 'path';

export const copy = async () => {
  const folderNameCopy = 'src/fs/files_copy';
  const folderName = 'src/fs/files';
  const errorText = 'FS operation failed';

  if (fs.existsSync(folderNameCopy) || !fs.existsSync(folderName)) {
    throw Error(errorText);
  }

  fs.mkdirSync(folderNameCopy);
  fs.readdir(folderName, (err,files) => {
    files.forEach((file) => {
      const curSource = path.join(folderNameCopy, file);
      const copiedSource = path.join(folderName, file);
      fs.copyFileSync(copiedSource, curSource)
    })
  })
};
copy()
