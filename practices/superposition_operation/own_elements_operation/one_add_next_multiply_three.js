'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  for (var i=0;i<collection.length;i++) {
    result.push((collection[i] + collection[i + 1]) * 3);

  }
  return result.splice(0,result.length-1);
}
module.exports = one_add_next_multiply_three;
