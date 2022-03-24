var convertKmToMiles = function (input) {
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  return convertKmToMiles(input);
};
