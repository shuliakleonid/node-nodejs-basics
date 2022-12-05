import { fork } from "child_process";

import { pathToDir } from "../utils/index.js";

export const spawnChildProcess = async (args) => {
  const pathToScript = pathToDir(import.meta.url, "script.js");
  const childProcess = fork(pathToScript, args, { silent: true });

  childProcess
    .on("spawn", () => {
      console.log(`Spawn child process with pid - ${childProcess.pid}`);
    })
    .on("exit", (code) => {
      console.log(
        `Exit child process with pid - ${childProcess.pid} and code - ${code}`
      );
    });
  childProcess.stdout.pipe(process.stdout);
  childProcess.stdout.on("data", (chunk) => {
    console.log(`Message from child process: ${chunk}`);
  });
  process.stdin.pipe(childProcess.stdin);
};

await spawnChildProcess(["first", "second", 79, "foo", "bar"]);
