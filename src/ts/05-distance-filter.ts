let distanceFilter = [10, 20];

function setDistance(begin, end) {
  distanceFilter = [begin, end];
}
function setFilter(newDistanceFilter) {
  distanceFilter = newDistanceFilter;
}

setDistance(30, 40);
setFilter([30, 40]);
