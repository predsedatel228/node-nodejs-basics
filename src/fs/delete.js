import { promises as fs, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const remove = async () => {
    const filename  = fileURLToPath(import.meta.url);
    const  fileToRemove = join(dirname(filename), 'files', 'fileToRemove.txt');
    if (!existsSync(fileToRemove)) {
        throw new Error('FS operation failed')
    } else {
        fs.unlink(fileToRemove);
    }
};

await remove();