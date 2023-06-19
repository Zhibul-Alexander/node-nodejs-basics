import {join} from 'path';
import {createReadStream, createWriteStream} from 'fs';
import {createGunzip} from 'zlib';

const decompress = async () => {
    const folderPath = './src/zip/files';
    const fileName = 'fileToCompress.txt';
    const compressFileName = 'archive.gz';

    const filePath = join(folderPath, fileName);
    const decompressFilePath = join(folderPath, compressFileName);

    const readStream = createReadStream(decompressFilePath);
    const gunzipStream = createGunzip();
    const decompressStream = createWriteStream(filePath);

    readStream.pipe(gunzipStream).pipe(decompressStream);

    decompressStream.on('finish', () => {
        console.log('File decompressed successfully.');
    });

    decompressStream.on('error', () => {
        console.error('Error decompressing file');
    });
};

await decompress();