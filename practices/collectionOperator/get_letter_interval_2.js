"use strict";

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "aa", "ab", "ac", "ad", "ae", "af", "ag","ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap","aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az", "ba"]
  if(number_a < number_b){
    for (var i=number_a; i<=number_b; i++){
      result.push(letter[i])
    }
  }
  if(number_a > number_b){
    for(var i=number_a; i>=number_b; i--){
      result.push(letter[i]);
    }
  }
  if(number_a == number_b){

      result.push(letter[number_b]);

  }
  return result;
}

module.exports = get_letter_interval_2;

