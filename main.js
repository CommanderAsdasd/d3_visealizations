var d3 = require('d3');
var marked = require('marked');
const MT = require('mark-twain');
const fs = require('fs');
const jsonML = MT(fs.readFileSync('hydra_func.md').toString());
console.log(jsonML['content']);
