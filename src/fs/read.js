import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const read = async () => {
  const filename = fileURLToPath(import.meta.url);
  const fileToRead = join(dirname(filename), 'files', 'fileToRead.txt');
  if (!existsSync(fileToRead)) {
    throw new Error('FS operation failed');
  } else {
    const data = readFileSync(fileToRead, 'utf8');
    console.log(data);
  }
};

await read();
