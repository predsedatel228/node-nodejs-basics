import { existsSync, createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import crypto from 'crypto';

const calculateHash = async () => {
  const filename = fileURLToPath(import.meta.url);
  const fileToRead = join(
    dirname(filename),
    'files',
    'fileToCalculateHashFor.txt'
  );
  if (!existsSync(fileToRead)) {
    throw new Error(`file does not exist`);
  } else {
    const stream = createReadStream(fileToRead);
    const hash = crypto.createHash('sha256');
    stream.on('data', (data) => hash.update(data));
    stream.on('end', () => {
        console.log(`Hash for ${fileToRead}: ${hash.digest('hex')}`)
    })
    stream.on('error', (error) => {
        throw new Error(`Error : ${error.message}`)
    })
  }
};

await calculateHash();
