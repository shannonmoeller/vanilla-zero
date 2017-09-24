const dependencyTree = require('dependency-tree');
const { join } = require('path');

const root = join(__dirname, 'client/');
const filename = 'client/js/index.js';
const directory = 'client/';

const deps = dependencyTree
	.toList({ filename, directory })
	.map(x => x.replace(root, ''));

console.log(deps);
