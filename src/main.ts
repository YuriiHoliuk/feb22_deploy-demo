// lodash esm
import _ from 'lodash';

// nums array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for loop
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// partition array and destructure
const [evens, odds] = _.partition(nums, (num) => num % 2 === 0);

// log results
console.log(evens);
console.log(odds);

const str = 'name:Bob.age:20.date:2019-01-01';
export function parse(input: string): { name: string; age: number; date: Date } {
  const [name, age, date] = input.split(':');
  return {
    name,
    age: parseInt(age, 10),
    date: new Date(date),
  };
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}

// export results
export { evens, odds };
