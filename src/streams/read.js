import { existsSync, createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { stdout } from 'process';

const read = async () => {
    const filename = fileURLToPath(import.meta.url);
    const fileToRead = join(
      dirname(filename),
      'files',
      'fileToRead.txt'
    );
    if (!existsSync(fileToRead)) {
      throw new Error(`file does not exist`);
    } else {
      const stream = createReadStream(fileToRead);
      stream.pipe(stdout)
      stream.on('error', (error) => {
          throw new Error(`Error : ${error.message}`)
      })
    }
};

await read();