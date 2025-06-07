// Task ZM
function reverseInteger(input: number): number {
	return parseInt(input.toString().split('').reverse().join(''));
}
console.log(reverseInteger(123456789));
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
