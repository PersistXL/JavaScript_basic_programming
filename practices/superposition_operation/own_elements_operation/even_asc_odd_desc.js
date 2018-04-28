'use strict';
var even_asc_odd_desc = function(collection){
  var oushu = [];
  var jishu = [];
  for (var i in collection) {
    if (collection[i] % 2 === 0) {
      oushu.push(collection[i]);
    }else {
      jishu.push(collection[i]);
    }
  }

  oushu.sort(function (x,y) {
    return x-y;
  });

  jishu.sort(function (x,y) {
    return y - x;
  })
  return oushu.concat(jishu)
};
module.exports = even_asc_odd_desc;
