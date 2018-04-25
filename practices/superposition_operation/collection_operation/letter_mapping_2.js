'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  var sum = 0;
  var letter = ["", "a", "b","c","d","e","f","g","h","i","j"];
  for (var indext in collection){
    sum += collection[indext];
  }
  return letter[Math.ceil(sum / collection.length)];
}

module.exports = average_to_letter;

