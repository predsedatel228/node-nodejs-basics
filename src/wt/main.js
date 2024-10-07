import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { cpus } from 'os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
  const workers = [];

  for (let i = 0; i < cpus().length; i++) {
    workers.push(createWorker(10 + i));
  }

  Promise.allSettled(workers).then((results) => {
    console.log(
      results.map((result) => {
        if (result.status == 'fulfilled') {
          return {
            status: 'resolved',
            data: result.value.data,
          };
        } else {
          return {
            status: 'error',
            data: null,
          };
        }
      })
    );
  });
};

const createWorker = (workerData) => {
  const filename = fileURLToPath(import.meta.url);
  const workerFile = join(dirname(filename), 'worker.js');
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerFile, {
      workerData,
    });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};

await performCalculations();
