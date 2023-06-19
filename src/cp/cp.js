import {join} from 'path';
import {fork} from 'child_process';

const spawnChildProcess = async (args) => {
    const folderPath = './src/cp/files';
    const fileName = 'script.js';
    const filePath = join(folderPath, fileName);

    const childProcess = fork(filePath, args, {silent: true});

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess();
