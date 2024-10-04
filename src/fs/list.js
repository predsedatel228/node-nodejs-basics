import { promises as fs, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const list = async () => {
  const filename = fileURLToPath(import.meta.url);
  const directory = join(dirname(filename), 'files');
  if (!existsSync(directory)) {
    throw new Error('FS operation failed');
  } else {
    const files = await fs.readdir(directory);
    files.map(async (file) => {
      console.log(file);
    });
  }
};

await list();
