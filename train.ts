// Task ZO
function areParenthesesBalanced(str: string): boolean {
	let openCount: number = 0;
	let closeCount: number = 0;

	for (let i: number = 0; i < str.length; i++) {
		if (str[i] === '(') {
			openCount++;
		} else if (str[i] === ')') {
			closeCount++;

			if (closeCount > openCount) {
				return false;
			}
		}
	}

	return openCount === closeCount;
}

console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda'));
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
