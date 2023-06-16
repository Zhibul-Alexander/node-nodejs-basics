import {join} from 'path';
import {existsSync} from 'fs';
import {readFile} from 'fs/promises';

const read = async () => {
    const folderPath = './src/fs/files';
    const fileName = 'fileToRead.txt';
    const filePath = join(folderPath, fileName);

    if (!existsSync(filePath)) {
        return console.log('FS operation failed')
    }

    try {
        const readFileResult = await readFile(filePath, 'utf-8');
        console.log(readFileResult)
    } catch {
        console.log('Error reading file');
    }
};

await read();