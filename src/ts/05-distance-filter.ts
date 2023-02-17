let distanceFilter: number[] = [10, 20];

function setDistance(begin: number, end: number): void {
  distanceFilter = [begin, end];
}
function setFilter(newDistanceFilter: number[]): void {
  distanceFilter = newDistanceFilter;
}

setDistance(30, 40);
setFilter([30, 40]);
