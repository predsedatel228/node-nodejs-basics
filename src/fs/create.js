import { promises as fs, access, constants} from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const create = async () => {
  const filename = fileURLToPath(import.meta.url);
  const filePath = join(dirname(filename), 'files', 'fresh.txt');
  const data = 'I am fresh and young';

  access(filePath, constants.F_OK, (err) => {
    if (!err) {
        throw new Error('FS operation failed')
    } else {
        fs.writeFile(filePath, data);
    }
  })
};

await create();
