import {join} from 'path';
import {createGzip} from 'zlib';
import {createReadStream,createWriteStream} from 'fs';

const compress = async () => {
    const folderPath = './src/zip/files';
    const fileName = 'fileToCompress.txt';
    const compressFileName = 'archive.gz';

    const filePath = join(folderPath, fileName);
    const compressFilePath = join(folderPath, compressFileName);

    const readStream = createReadStream(filePath);
    const gzipStream = createGzip();
    const compressStream = createWriteStream(compressFilePath);

    readStream.pipe(gzipStream).pipe(compressStream);

    compressStream.on('finish', () => {
        console.log('File compressed successfully.');
    });

    compressStream.on('error', () => {
        console.error('Error compressing file');
    });
};

await compress();