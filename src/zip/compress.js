import zlib from 'node:zlib'; 
import { existsSync, createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const compress = async () => {
    const filename = fileURLToPath(import.meta.url);
    const fileToRead = join(
      dirname(filename),
      'files',
      'fileToCompress.txt'
    );
    const fileToWrite = join(
        dirname(filename),
        'files',
        'archive.gz'
      );
    if (!existsSync(fileToRead)) {
        throw new Error(`file does not exist`);
      } else {
        const readStream = createReadStream(fileToRead);
        const writeStream = createWriteStream(fileToWrite)
        const gzip = zlib.createGzip();
        readStream.pipe(gzip).pipe(writeStream);
      }

};

await compress();