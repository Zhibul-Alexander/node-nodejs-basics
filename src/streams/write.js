import {join} from 'path';
import {createWriteStream} from 'fs';

const write = async () => {
    const folderPath = './src/streams/files';
    const fileName = 'fileToWrite.txt';
    const filePath = join(folderPath,fileName)

    await new Promise(() => {
        const writeStream = createWriteStream(filePath);

        process.stdin.pipe(writeStream);
    })
};

await write();