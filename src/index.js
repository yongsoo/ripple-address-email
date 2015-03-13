var dataAll = require(__dirname+'/../data/data');
var numTotalAccts = dataAll.length;
var affectedAccts = require(__dirname+'/../data/affected');
var numAffectedAccts = affectedAccts.length;

var collection = [];

for (var i = 0; i < numTotalAccts; i++) {
  var currentLong = dataAll[i];

  for (var j = 0; j < numAffectedAccts; j++) {
    var currentShort = affectedAccts[j]
    if (currentShort === currentLong[0]) {
      collection.push(currentLong[1]);
      break;
    }
  }
}

console.log('FULL LIST:');
console.log(collection);