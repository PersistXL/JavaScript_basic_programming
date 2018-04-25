'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var reslut = [];
  var letter = ["", "a", "b","c","d","e","f","g","h","i","j"];
  for (var index in collection) {
    if (collection[index] % 2 == 0) {
      reslut.push(letter[collection[index]]);
    }
  }
  return reslut;
}

module.exports = even_to_letter;
