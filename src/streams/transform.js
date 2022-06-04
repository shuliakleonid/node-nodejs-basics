import {Transform} from 'stream'
import {stdin, stdout} from 'node:process';

export const transform = async () => {
const transform = new Transform({
  transform: (chunk, encoding, callback) => {
    const reversed = chunk.toString().split('').reverse().join('').slice(1)
    callback(null,reversed)
  }
})
  stdin.pipe(transform).pipe(stdout)
};
await transform()
