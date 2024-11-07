import art from 'ascii-art';
import fs from 'node:fs';

console.log(
  art.style('Hello NodeJS ECMAScript Modules - ESM!', 'red+white_bg+bold', true)
);

fs.readFile('./sayings.json', 'utf8', (err, data) => {
  if (err) console.log(err);
  console.log(art.style(data, 'green_bg', true));
});
