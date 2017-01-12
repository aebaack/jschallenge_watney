'use strict';

function decode(str){
  return str.split(',').reduce((message, char) => {
    const decodedChar = String.fromCharCode(parseInt(char, 16));
    return message + decodedChar;
  }, '');
}

function encode(str){
  let message = [];
  for (let i = 0; i < str.length; i++) {
    message.push(str.charCodeAt(i).toString(16));
  }
  return message.join(',');
}

function encodeArc(str) {
  const encodedStr = encode(str).replace(/,/g, '');
  // 0 - 0
  // 1 - 22.5
  // 2 - 45
  // 4 - 90
  const arcAngles = [];
  for (let char of encodedStr) {
    if (!Number.isInteger(parseInt(char))) {
      char = parseInt(char, 16);
    }
    arcAngles.push(char * 22.5);
  }
  return arcAngles.join(',');
}

module.exports = {decode,encode,encodeArc};