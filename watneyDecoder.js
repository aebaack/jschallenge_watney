'use strict';

function decode(str){
  // return str.split(',').reduce((message, char) => {
  //   const decodedChar = String.fromCharCode(parseInt(char, 16));
  //   return message + decodedChar;
  // }, '');

  return str
    .split(',')
    .reduce((message, char) => message + String.fromCharCode(parseInt(char, 16)), '');
}

function encode(str){
  // let message = [];
  // for (let i = 0; i < str.length; i++) {
  //   message.push(str.charCodeAt(i).toString(16));
  // }
  // return message.join(',');

  // Mat's Solution
  return str
    .split('')
    .map(c => c.charCodeAt().toString(16))
    .join(',');
}

function encodeArc(str) {
  // const encodedStr = encode(str).replace(/,/g, '');
  // const arcAngles = [];
  // for (let char of encodedStr) {
  //   if (!Number.isInteger(parseInt(char))) {
  //     char = parseInt(char, 16);
  //   }
  //   arcAngles.push(char * 22.5);
  // }
  // return arcAngles.join(',');

  return encode(str)
    .replace(/,/g, '')
    .split('')
    .map(c => Number.isInteger(parseInt(c)) ? c * 22.5 : parseInt(c, 16) * 22.5)
    .join(',');
}

module.exports = {decode,encode,encodeArc};