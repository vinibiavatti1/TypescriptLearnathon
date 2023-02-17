let distanceFilter: number[] = [10, 20];

function setDistance(begin: number, end: number) {
  distanceFilter = [begin, end];
}
function setFilter(newDistanceFilter: number[]) {
  distanceFilter = newDistanceFilter;
}

setDistance(30, 40);
setFilter([30, 40]);
