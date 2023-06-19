import {join} from 'path';
import {existsSync} from 'fs';
import {unlink} from 'fs/promises';

const remove = async () => {
    const folderPath = './src/fs/files';
    const fileName = 'fileToRemove.txt';
    const filePath = join(folderPath, fileName);

    if (!existsSync(filePath)) {
        return console.log('FS operation failed')
    }

    try {
        await unlink(filePath);
        console.log('File removed');
    } catch {
        console.log('Error removing file');
    }
};

await remove();