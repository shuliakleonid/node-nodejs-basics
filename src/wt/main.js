import { pathToDir } from "../utils/index.js";
import { Worker } from "worker_threads";
import { cpus } from "os";

const workerPromise = (index, workerData) => () =>
  new Promise((resolve) => {
    const url = pathToDir(import.meta.url, "worker.js");
    const worker = new Worker(url, {
      workerData,
    });

    worker.on("online", () => {
    });
    worker.on("error", () => {
      resolve({ data: null, status: "error" });
    });
    worker.on("message", (result) => {
      resolve({ data: result, status: "resolved" });
    });
  });

export const performCalculations = async () => {
  const workers = [];
  const cors = cpus().length;

  for (let index = 0; index < cors; index++) {
    workers.push(workerPromise(index + 1, 10 + index));
  }

  return Promise.all(workers.map((worker) => worker()));
};

console.log(await performCalculations());
