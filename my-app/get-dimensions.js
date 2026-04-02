const fs = require('fs');
const p = 'design/active-states.jpg';
const data = fs.readFileSync(p);
if (data[0] !== 255 || data[1] !== 216) {
  console.error('not jpeg');
  process.exit(1);
}
let i = 2;
let w, h;
while (i < data.length) {
  if (data[i] !== 255) break;
  const type = data[i + 1];
  const len = data.readUInt16BE(i + 2);
  if (type >= 192 && type <= 195) {
    h = data.readUInt16BE(i + 5);
    w = data.readUInt16BE(i + 7);
    break;
  }
  i += 2 + len;
}
console.log(p, 'width', w, 'height', h, 'size', data.length, 'bytes');
