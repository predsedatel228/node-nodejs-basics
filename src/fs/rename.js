import { promises as fs, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const rename = async () => {
    const filename  = fileURLToPath(import.meta.url);
    const  oldPath = join(dirname(filename), 'files', 'wrongFilename.txt');
    const newPath = join(dirname(filename), 'files', 'properFilename.md');
    if (!existsSync(oldPath) || existsSync(newPath)) {
        throw new Error('FS operation failed')
    } else {
        fs.rename(oldPath, newPath);
    }
};

await rename();