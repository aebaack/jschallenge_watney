'use strict';

function decode(str){

}

function encode(str){
  let message = [];
  for (let i = 0; i < str.length; i++) {
    message.push(str.charCodeAt(i).toString(16));
  }
  return message.join(',');
}

function encodeArc(str) {

}

module.exports = {decode,encode,encodeArc}