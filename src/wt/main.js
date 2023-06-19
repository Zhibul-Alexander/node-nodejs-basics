import {cpus} from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const filePath = './src/wt/worker.js';

    const baseData = 10;
    const cpuCores = cpus().length;
    const resultArray = [];

    for (let i = 0; i < cpuCores; i++) {
        resultArray[i] = new Promise((resolve, reject) => {
            try {
                const worker = new Worker(filePath, {workerData: baseData + i});

                worker.on('message', (data) => resolve({status: 'resolved', data: data}));

                worker.on('error', (error) => reject({status: 'error', data: null, error: error}));
            } catch (err) {
                reject({ status: 'error', data: null, error: err });
            }
        });
    }

    const data = await Promise.all(resultArray)
    console.log(data);
};

await performCalculations();