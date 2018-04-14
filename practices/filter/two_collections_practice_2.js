'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  // for (var i = 0; i < collection_a.length; i++) {
  //   for (var j = 0; j < collection_b.length; j++) {
  //     if (collection_b[j] != collection_a[i]) {
  //       result.push(collection_b[j])
  //     }
  //   }
  // }


  // for (var i = 0; i < collection_a.length; i++) {
  //   var count = 0;
  //   for (var j = 0; j < collection_b.length; j++) {
  //     if (collection_b[j] == collection_a[i]) {
  //       count++;
  //     }
  //   }
  //     if (count == 0) {
  //       result.push(collection_a[i]);
  //     }
  // }
  // return result;

  return collection_a.filter(item => (collection_b.includes(item) ? false : true))

}

module.exports = choose_no_common_elements;
