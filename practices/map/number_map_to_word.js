'use strict';
var number_map_to_word = function(collection){
  // var result = []
  // for(var i = 0;i<collection.length;i++){
  //   result.push(String.fromCharCode(i+97))
  // }
  // return  result
  return collection.map(result =>String.fromCharCode(result+96))
};

module.exports = number_map_to_word;
