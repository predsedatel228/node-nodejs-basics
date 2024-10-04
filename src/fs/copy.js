import { promises as fs, access, constants} from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const copy = async () => {
    const filename = fileURLToPath(import.meta.url);
    const directory = join(dirname(filename), 'files');
    const copyDerictory = join(dirname(filename), 'files_copy');
    access(directory, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed')
        } 
      })
      access(copyDerictory, constants.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed')
        } 
      })

    await fs.mkdir(copyDerictory, { recursive: true });
    const files = await fs.readdir(directory);
    files.map(async (file) => {
      const startPath = join(directory, file);
      const copyPath = join(copyDerictory, file);
      await fs.copyFile(startPath, copyPath);
    });
};

await copy();
