import { parentPort, workerData } from "worker_threads";

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (number) => {
  const result = nthFibonacci(number);

  // if (workerData === 15) throw new Error('Error in thread)))');

  return result;
};

parentPort.postMessage(sendResult(workerData));
