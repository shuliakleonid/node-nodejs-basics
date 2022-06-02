import fs from 'fs';

export const remove = async () => {
  const deletedFile = 'src/fs/files/fileToRemove.txt';
  const errorText = 'FS operation failed';

  if (!fs.existsSync(deletedFile)) {
    throw Error(errorText);
  }
  fs.unlink(deletedFile,  () => {
    console.log('File deleted!');
  });
};
remove()
