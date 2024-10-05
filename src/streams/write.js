import { existsSync, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const write = async () => {
  const filename = fileURLToPath(import.meta.url);
  const fileToWrite = join(dirname(filename), 'files', 'fileToWrite.txt');
  const input = readline.createInterface(process.stdin);
  if (!existsSync(fileToWrite)) {
    throw new Error(`file does not exist`);
  } else {
    const stream = createWriteStream(fileToWrite);
    process.stdout.write('Please write text:\n (type Ctrl+C to exit)\n');
    process.stdin.pipe(stream);
  }
};

await write();
