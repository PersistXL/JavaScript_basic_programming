'use strict';
var rank_asc = function(collection){
  return collection.sort(paixu)
};
function paixu(a, b) {
  return a - b < 0;
}
module.exports = rank_asc;
