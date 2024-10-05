import { Transform } from 'node:stream'

const transform = async () => {
  process.stdout.write('Please write text:\n (type Ctrl+C to exit)\n');
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join(''))
    }
  })
    process.stdin
    .pipe(reverseStream)
    .pipe(process.stdout);
}

await transform();
