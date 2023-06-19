import {join} from 'path';
import {createHash} from 'crypto';
import {createReadStream} from 'fs';

const calculateHash = async () => {
    const folderPath = './src/hash/files';
    const fileName = 'fileToCalculateHashFor.txt';
    const filePath = join(folderPath,fileName)

    await new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const fileStream = createReadStream(filePath);

        fileStream.on('data', (data) => {
            hash.update(data)
        })

        fileStream.on('end', () => {
            const fileHash = hash.digest('hex');
            resolve(fileHash)
            console.log(fileHash)
        })

        fileStream.on('error', (e) => {
            reject(e)
        })
    })
};

await calculateHash();