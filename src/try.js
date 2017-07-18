/*
 * js-try
 * @version v0.9.0
 * @link http://github.com/westonganger/js-try
 * @license MIT
 */

(function(){
  "use strict";

  if(!Object.prototype.try){
    var isFunction = function(x){
      return !!(x && x.constructor && x.call && x.apply);
    };

    Object.prototype.try = function(x){
      var val = this[x];
      if(Try(val)){
        if(isFunction(val)){
          if(arguments.length > 1){
            var args = Array.prototype.slice.call(arguments);
            args.shift();
          }
          val = val.apply(this, args);
        }
        return Try(val);
      }
      return false;
    };

    Object.defineProperty(Object.prototype, "try", {enumerable: false});
  }
}(this));

function Try(x){
  return (x || x === 0 || x === '') ? x : false;
}

if(typeof exports !== 'undefined' && typeof module !== 'undefined' && module.exports){
  module.exports = Try;
}else if(window) {
  window.Try = Try;
} 
