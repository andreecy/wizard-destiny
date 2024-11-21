


export namespace Utility {
	export function randomIntInclusive(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	export function randomIntExclusive(max: number, min: number = 0): number {
		return Math.floor(Math.random() * (max - min)) + min;
	}
}