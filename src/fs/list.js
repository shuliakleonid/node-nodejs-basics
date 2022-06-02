import fs from 'fs'

export const list = async () => {
  const folderName = 'src/fs/files';
  const errorText = 'FS operation failed';

  if (!fs.existsSync(folderName)) {
    throw Error(errorText);
  }
  fs.readdir(folderName, (err, files) => {
    files.forEach((file) => console.log(file))
  })
}
list()
