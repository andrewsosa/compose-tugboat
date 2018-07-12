import path from 'path';

import config, { keys, COMPOSE_FILENAME } from '../util/config';
import { copy } from '../util/fs';


export function save(dest, options) {
  const cwd = process.cwd();
  const dir = config().get(keys.dir);

  const sourcePath = path.join(cwd, COMPOSE_FILENAME);
  const destPath = path.join(cwd, dir, dest);

  copy(sourcePath, destPath, options);
}

export function load(source, options) {
  const cwd = process.cwd();
  const dir = config().get(keys.dir);

  const sourcePath = path.join(cwd, dir, source);
  const destPath = path.join(cwd, COMPOSE_FILENAME);

  copy(sourcePath, destPath, options);
}


export default { save, load };
