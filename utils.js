import path from 'path';
import { fileURLToPath } from 'url';

const getDirName = (moduleUrl) => {
  const filename = fileURLToPath(moduleUrl);
  return path.dirname(filename);
}

export {
  getDirName,
}
