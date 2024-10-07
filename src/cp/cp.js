import { fork} from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const spawnChildProcess = async (args) => {
    const filename = fileURLToPath(import.meta.url);
    const file = join(dirname(filename),'files', 'script.js');
    fork(file, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [1, 2, 4,5,6,7]);
