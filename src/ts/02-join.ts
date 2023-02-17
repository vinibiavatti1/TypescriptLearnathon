function join(arr) {
  let result = '';
  arr.foreach(item => (result += item));
  return result;
}

join();
