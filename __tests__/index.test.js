import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getPath(filename), 'utf-8');

test('Check json flat objects', () => {
  expect(gendiff(getPath('file1.json'), getPath('file2.json'))).toBe(readFile('test1.txt'));
});
