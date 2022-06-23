// lodash esm
import _ from 'lodash';

// nums array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// partition array and destructure
const [evens, odds] = _.partition(nums, (num) => num % 2 === 0);

// log results
console.log(evens);
console.log(odds);

export function isEven(num) {
  return num % 2 === 0;
}

// export results
export { evens, odds };
