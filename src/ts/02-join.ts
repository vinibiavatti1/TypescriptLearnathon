// function join(arr) {
//   let result = '';
//   arr.foreach(item => (result += item));
//   return result;
// }

// join();

function join(arr: string[]): string {
  let result = '';
  arr.forEach(item => (result += item));
  return result;
}
let arr: string[];
join(arr);
