const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(num) {
  let total = 0;
  let trav = 0;
  while (trav < num.length) {
    total += num[trav];
    trav++;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
  return num[0] + sumRecursion(num.slice(1, num.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(num) {
  return _.reduce(num, function (memo, nums) { return memo + nums; }, 0);
}

console.log(sumTheSimpleWay(testNums));
