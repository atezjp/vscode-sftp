const { fs } = require('memfs');
const { Readable, Writable } = require('stream');

function normalizeWriteOptions(options) {
  if (!options) {
    return {};
  }
  return { ...options };
}

fs.createReadStream = function createReadStream(path, options) {
  const stream = Readable.from([fs.readFileSync(path, options)]);
  stream.close = () => {};
  return stream;
};

fs.createWriteStream = function createWriteStream(path, options) {
  const writeOptions = normalizeWriteOptions(options);
  const chunks = [];

  const stream = new Writable({
    write(chunk, _encoding, callback) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      callback();
    },
    final(callback) {
      const content = Buffer.concat(chunks);
      if (typeof writeOptions.fd === 'number') {
        fs.writeFileSync(writeOptions.fd, content);
      } else {
        fs.writeFileSync(path, content, writeOptions);
      }
      callback();
    },
  });

  stream.close = () => {};
  return stream;
};

fs.__mock__ = true;
module.exports = fs;
