import {join} from 'path';
import {createReadStream} from 'fs';

const read = async () => {
    const folderPath = './src/streams/files';
    const fileName = 'fileToRead.txt';
    const filePath = join(folderPath,fileName)

    await new Promise(() => {
        const readStream = createReadStream(filePath, {encoding: 'utf8'});

        readStream.on('data', (data) => {
            process.stdout.write(data);
        })
    })
};

await read();