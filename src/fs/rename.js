import {join} from 'path';
import {rename as renameFs} from 'fs/promises';
import {existsSync} from 'fs';

const rename = async () => {
    const folderPath = './src/fs/files';
    const fileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';

    const currentFilePath = join(folderPath, fileName);
    const newFilePath = join(folderPath, newFileName);

    if (!existsSync(currentFilePath) || existsSync(newFilePath)) {
        return console.log('FS operation failed')
    }

    try {
        await renameFs(currentFilePath, newFilePath);
        console.log('Folder renamed');
    } catch {
        console.log('Error renaming folder');
    }
};

await rename();