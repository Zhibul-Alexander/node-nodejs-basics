import {access, writeFile} from 'fs/promises';
import {join} from 'path';

const create = async () => {
    const folderPath = './src/fs/files';
    const fileName = 'fresh.txt';
    const filePath = join(folderPath, fileName);

   try {
       await access(filePath)
       console.log('FS operation failed');
   } catch (e) {
        if (e.code === 'ENOENT') {
            try {
                await writeFile(filePath, 'I am fresh and young');
                console.log('File created');
            } catch {
                console.log('Error creating file');
            }
        } else {
            console.log('Error accessing file');
        }
   }
};

await create();