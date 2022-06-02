import fs from 'fs'

export const create = async () => {
  const pathFile = 'src/fs/files/fresh.txt';
  const writingText = 'I am fresh and young';
  const errorText = 'FS operation failed';
  fs.exists(pathFile,(isExist) => {
  if (isExist) {
    throw Error(errorText);
  } else {
    fs.writeFile(pathFile, writingText, console.log)
  }
  })
};
create()
