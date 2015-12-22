var a = require('./a/a');
var b = require('./b/b');
var c = require('./c/c');

var uniq = require('uniq');

console.log(
  "Todos los números",
  a.concat(b).concat(c)
);

debugger

console.log(
  "Números sin repetir",
  uniq(
    a.concat(b).concat(c)
  )
);
