import sortArr from '../index';

const arr = [
	{ name: 'мечник', health: 10 },
	{ name: 'маг', health: 100 },
	{ name: 'лучник', health: 80 },
];

const arrNew = [
	{ name: 'маг', health: 100 },
	{ name: 'лучник', health: 80 },
	{ name: 'мечник', health: 10 },
];

test(('Сортировка по здоровью с toEqual'), () => {
	expect(sortArr(arr)).toEqual(arrNew);
});

test(('Сортировка по здоровью с toBe'), () => {
	expect(sortArr(arr)).not.toBe(arrNew);
});