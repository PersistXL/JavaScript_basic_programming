'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  // var result = [];
  // for(var i = 0; i<=collection.length;i++){
  //   if(i % 3 == 0){
  //     result.push(i)
  //   }
  // }
  // return result;re
  return collection.filter(collection => collection % 3 === 0);
}

module.exports = choose_multiples_of_three;
