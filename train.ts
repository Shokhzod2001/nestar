// TASK ZT
import { T } from 'apps/nestar-api/src/libs/types/common';

function firstUniqueCharIndex(str: string): number {
	const charCount: T = {};

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		charCount[char] = (charCount[char] || 0) + 1;
	}

	for (let i = 0; i < str.length; i++) {
		if (charCount[str[i]] === 1) {
			return i;
		}
	}

	return -1;
}
console.log(firstUniqueCharIndex('stamp'));
// TASK ZS
// function singleNumber(arr: number[]): number {
// 	return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))[0];
// }
// console.log(singleNumber([4, 2, 1, 2, 1]));
// TASK ZR
// function countNumberAndLetters(str: string): { number: number; letter: number } {
// 	let numberCount = 0;
// 	let letterCount = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		const char = str[i];

// 		if (char >= '0' && char <= '9') {
// 			numberCount++;
// 		} else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
// 			letterCount++;
// 		}
// 	}

// 	return {
// 		number: numberCount,
// 		letter: letterCount,
// 	};
// }

// console.log(countNumberAndLetters('string152%\¥'));
// Task ZQ
// function findDuplicates(arr: number[]) {
// 	return arr
// 		.filter((num, index) => arr.indexOf(num) !== index)
// 		.filter((num, index, self) => self.indexOf(num) === index);
// }
// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));
// Task ZP
// function areArraysEqual(arr1: number[], arr2: number[]): boolean {
// 	return arr1.every((elem) => arr2.includes(elem)) && arr2.every((elem) => arr1.includes(elem));
// }

// console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1]));
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));

// Task ZO
// function areParenthesesBalanced(str: string): boolean {
// 	let openCount: number = 0;
// 	let closeCount: number = 0;

// 	for (let i: number = 0; i < str.length; i++) {
// 		if (str[i] === '(') {
// 			openCount++;
// 		} else if (str[i] === ')') {
// 			closeCount++;

// 			if (closeCount > openCount) {
// 				return false;
// 			}
// 		}
// 	}

// 	return openCount === closeCount;
// }

// console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda'));
// Task ZN
// function rotateArray(arr: number[], num: number): number[] {
// 	const arr1 = arr.splice(0, num + 1);
// 	return arr.concat(arr1);
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
// Task ZL
// function stringToKebab(input: string) {
// 	return input
// 		.split(' ')
// 		.map((word) => word.toLowerCase())
// 		.join('_');
// }
// console.log(stringToKebab('I love Kebab'));
// Task ZM
// function reverseInteger(input: number): number {
// 	return parseInt(input.toString().split('').reverse().join(''));
// }
// console.log(reverseInteger(123456789));
// Task ZK
// function printNumbers(): void {
// 	let count = 1;

// 	const interval = setInterval(() => {
// 		console.log(count);
// 		count++;

// 		if (count > 5) {
// 			clearInterval(interval);
// 		}
// 	}, 1000);
// }
// printNumbers();
