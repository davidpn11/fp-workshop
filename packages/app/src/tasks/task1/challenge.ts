import {flow, pipe} from 'fp-ts/lib/function';

const add = (x: number) => (y: number) => x + y;
const mult = (x: number) => (y: number) => x * y;

//Use the following methods to complete the challenges

const add1 = add(1);
const mult2 = mult(2);
const multNeg1 = mult(-1);

export type Student = {
  firstName: string;
  lastName: string;
  score: number;
  graduated: boolean;
};

export let challenge1a: (n: number) => number;
export let challenge1b: (n: number) => number;
export let challenge1c: (n: number) => number;
export let challenge1d: (n: number) => string;

/**Given students and score, return an array of lastName for all students above the given score */
export let challenge2a: (students: Student[], score: number) => string[];

/** Given students list and names of names, move all the students whos lastName is in names to graduated, that is, move graduated to true. Return the initial list of students*/
export let challenge2b: (students: Student[], names: string[]) => Student[];
