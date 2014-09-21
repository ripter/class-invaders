/*global module, require */

module.exports = {
  horizontalLength: function(width, list, index, type) {
    var range = getRange(width, index);
    // var rowPos = 0 | index % width;
    // var left = index - rowPos;
    // var right = index + (width - rowPos) - 1;
    var original = list[index];
    var isConnected = false;
    var count = 0;
    var i, button;

    for (i=range.left; i <= range.right; i++) {
      button = list[i];

      if (button.frame !== type && !isConnected) {
        count = 0;
      }
      else if (button.frame !== type && isConnected) {
        break;
      }
      else if (button.frame === type) {
        count++;
      }

      if (button === original) {
       isConnected = true;
      }
    }

    return count;
  }

  , verticalLength: function(width, list, index, type) {
    return 0;
  }

  , getRange: getRange
};

// returns the start and end of the the row index appears on.
function getRange(width, index) {
  var pos = 0 | index % width;
  var left = index - pos;
  var right = index + (width - pos) - 1;

  return {
    left: left
    , right: right
    , pos: pos
  };
}