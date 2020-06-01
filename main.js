var d3 = require('d3');
var marked = require('marked');
// var marked = require('mark-to-json');
// const Mtj = require('mark-to-json')
const MT = require('mark-twain');
const fs = require('fs');
const jsonML = MT(fs.readFileSync('hydra_func.md').toString());
console.log(jsonML);
// console.log(d3);
// var fs = require('fs');
var fileContent = null;

// fs.readFile('hydra_func.md', 'utf8', function(err, contents) {
//     create_mjt(contents);
// });

// function create_mjt(content) {
//     return new Mtj({
//         token: content,
//         dest: './hydra.json',
//         extraHeader: {
//           errno: 0
//         },
//         contentKey: 'content',
      
//         // Only work with one parameter: schema
//         filter (schema) {
//           // do something
//           // `return` is optional
//         }
//       })    
// }
 
// console.log('after calling readFile');