const art = require('ascii-art');
const { readFile } = require('node:fs');

console.log(art.style('my text', 'red+white_bg+bold', true));

readFile('./sayings.json', 'utf8', (err, data) => {
  if (err) console.log(err);
  console.log(art.style(data, 'green_bg', true));
});
