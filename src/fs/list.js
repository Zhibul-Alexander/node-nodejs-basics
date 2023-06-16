import {existsSync} from 'fs';
import {readdir} from 'fs/promises';

const list = async () => {
    const folderPath = './src/fs/files';

    if (!existsSync(folderPath)) {
        return console.log('FS operation failed')
    }

    try {
        const readDirResult = await readdir(folderPath);
        console.log(readDirResult)
    } catch {
        console.log('Error listing files');
    }
};

await list();