import {existsSync} from 'fs';
import {mkdir, readdir, copyFile} from 'fs/promises';
import {join} from 'path';

const copy = async () => {
    const folderPath = './src/fs/files';
    const copyFolderPath = './src/fs/files_copy';

    if (!existsSync(folderPath) || existsSync(copyFolderPath)) {
        return console.log('FS operation failed')
    }

    try {
        await mkdir(copyFolderPath);
        const readDirResult = await readdir(folderPath);

        for (const file of readDirResult) {
            const filePath = join(folderPath, file);
            const copyFilePath = join(copyFolderPath, file);
            await copyFile(filePath, copyFilePath);
        }

        console.log('Folder copied');
    } catch {
        console.log('Error copying folder');
    }
};

await copy();
